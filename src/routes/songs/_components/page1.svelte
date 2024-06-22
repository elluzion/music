<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import Translations from '$lib/translations';
  import { getFormStore } from '../stores';
  import AlbumArtField from './fields/album-art-field.svelte';
  import ArtistsFormField from './fields/artists-form-field.svelte';
  import SoundcloudImportField from './fields/soundcloud-import-field.svelte';

  const t = Translations.SONGFORM;

  const formStore = getFormStore();

  $: form = $formStore.form;
  $: formData = $formStore.form.form;
</script>

<SoundcloudImportField />

<Form.Field {form} name="title">
  <Form.Control let:attrs>
    <Form.Label>{t.FIELD_TITLE}</Form.Label>
    <Input {...attrs} bind:value={$formData.title} placeholder={t.FIELD_TITLE_PLACEHOLDER} />
  </Form.Control>
  <Form.FieldErrors />
</Form.Field>

<ArtistsFormField />

<AlbumArtField />
