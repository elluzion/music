<script lang="ts">
  import { setPageHeaderTitle } from '$lib/components/page-header';
  import Button from '$lib/components/ui/button/button.svelte';
  import Translations from '$lib/translations';
  import type { PageData } from './$types';

  const t = Translations.LOGIN;

  export let data: PageData;
  let { supabase, session, db } = data;

  setPageHeaderTitle(t.TITLE);

  async function login() {
    const error = await db.auth.signIn();
    if (error) console.log(error);
  }

  async function logout() {
    const error = await db.auth.signOut();
    if (!error) location.reload();
  }
</script>

<svelte:head>
  <title>{t.TITLE} | Elluzion</title>
</svelte:head>

<div class="flex flex-col gap-2 content-wrapper">
  <h1>{t.TITLE}</h1>
  {#if session}
    <p>{t.ALREADY_LOGGED_IN}</p>
    <Button on:click={logout}>{t.BUTTON_LOGOUT}</Button>
  {:else}
    <Button on:click={login}>{t.BUTTON_LOGIN}</Button>
  {/if}
</div>
