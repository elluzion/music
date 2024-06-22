<script lang="ts">
  import Card from '$lib/components/card.svelte';
  import { setPageHeaderTitle } from '$lib/components/page-header';
  import Translations from '$lib/translations';

  const t = Translations.TOOLS;

  type Tool = {
    name: string;
    description: string;
    path: string;
  };
  const tools: Tool[] = [
    {
      name: Translations.ANALYZER.TITLE,
      description: Translations.ANALYZER.DESCRIPTION,
      path: 'analyzer',
    },
  ];

  // Set page title
  setPageHeaderTitle(t.TITLE);
</script>

<svelte:head>
  <title>{t.TITLE} | Elluzion</title>
</svelte:head>

<div class="flex flex-col gap-2 content-wrapper">
  <h1>{t.TITLE}</h1>
  <div>
    {#each tools as tool}
      <a href="/tools/{tool.path}">
        <Card class="transition-colors hover:bg-elevation-2">
          <span class="text-lg font-medium">
            {tool.name}
          </span>
          <p class="text-muted-text">{tool.description}</p>
        </Card>
      </a>
    {/each}
  </div>
</div>
