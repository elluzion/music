import { createBrowserClient, createServerClient, isBrowser, parse } from '@supabase/ssr';

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';

import Db from '$lib/shared/db';
import type { Database } from '$lib/types/supabase';
import type { LayoutLoad } from './$types';

import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

export const load: LayoutLoad = async ({ data, depends, fetch }) => {
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends('supabase:auth');

  /**
   * Vercel analytics
   */
  inject({ mode: dev ? 'development' : 'production' });

  /**
   * Supabase client
   */
  const supabase = isBrowser()
    ? createBrowserClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          get(key) {
            const cookie = parse(document.cookie);
            return cookie[key];
          },
        },
      })
    : createServerClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          get() {
            return JSON.stringify(data.session);
          },
        },
      });

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  /** The database client instance */
  const db = new Db(supabase);

  return { db, supabase, session, user };
};
