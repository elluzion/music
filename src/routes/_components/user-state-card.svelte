<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import type Db from '$lib/shared/db';
  import Translations from '$lib/translations';
  import type { User } from '@supabase/supabase-js';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  export let db: Db;
  let user: User | undefined;
  onMount(async () => {
    user = await db.auth.getUserInfo();
  });

  const t = Translations.HOME.USER_STATE_CARD;
</script>

{#if user}
  <div transition:fade={{ duration: 200 }}>
    <Card>
      <div class="flex flex-col gap-4">
        <p class="font-bold">{t.TITLE}</p>

        <ul class="*:font-mono *:text-muted-text list-disc list-inside">
          <li>{t.NAME}: {user?.user_metadata.full_name}</li>
          <li>{t.MAIL}: {user?.email}</li>
          <li>{Translations.COMMON.LANGUAGE}: {Translations.INFO.LANG_NAME}</li>
        </ul>

        <Button on:click={() => db.auth.signOut()} variant="secondary" class="font-mono font-bold">
          {Translations.COMMON.LOGOUT}
        </Button>
      </div>
    </Card>
  </div>
{/if}
