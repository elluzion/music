<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import Translations from '$lib/translations';
  import DownloadlinksTab from './tabs/downloadlinks-tab.svelte';
  import StreamlinksTab from './tabs/streamlinks-tab.svelte';

  const t = Translations.SONGFORM;
</script>

<Tabs.Root value="streams" class="flex flex-col gap-4">
  <Tabs.List class="w-min">
    <Tabs.Trigger class="px-4" value="streams">{t.TAB_STREAMLINKS.TITLE}</Tabs.Trigger>
    <Tabs.Trigger class="px-4" value="downloads">{t.TAB_DOWNLOADLINKS.TITLE}</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="streams">
    <StreamlinksTab />
  </Tabs.Content>
  <Tabs.Content value="downloads">
    <DownloadlinksTab />
  </Tabs.Content>
</Tabs.Root>
