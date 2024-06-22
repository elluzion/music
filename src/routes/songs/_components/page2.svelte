<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import Translations from '$lib/translations';
  import { getFormStore } from '../stores';
  import ReleaseDatePickerField from './fields/release-date-picker-field.svelte';

  const t = Translations.SONGFORM;
  const formStore = getFormStore();

  $: form = $formStore.form;
  $: formData = $formStore.form.form;
</script>

<Form.Field {form} name="permalink">
  <Form.Control let:attrs>
    <Form.Label>{t.FIELD_PERMALINK}</Form.Label>
    <div class="flex items-center gap-2">
      <span>elluzion.co/</span>
      <Input
        {...attrs}
        bind:value={$formData.permalink}
        placeholder={t.FIELD_PERMALINK_PLACEHOLDER}
      />
    </div>
  </Form.Control>
  <Form.FieldErrors />
</Form.Field>

<div class="flex gap-2">
  <Form.Field {form} class="w-1/2" name="tempo">
    <Form.Control let:attrs>
      <Form.Label>{t.FIELD_TEMPO}</Form.Label>
      <Input
        {...attrs}
        bind:value={$formData.tempo}
        placeholder={t.FIELD_TEMPO_PLACEHOLDER}
        type="number"
      />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} class="w-1/2" name="key">
    <Form.Control let:attrs>
      <Form.Label>{t.FIELD_KEY}</Form.Label>
      <Input {...attrs} bind:value={$formData.key} placeholder={t.FIELD_KEY_PLACEHOLDER} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
</div>

<div class="flex gap-2">
  <Form.Field {form} class="w-1/2" name="genre">
    <Form.Control let:attrs>
      <Form.Label>{t.FIELD_GENRE}</Form.Label>
      <Input {...attrs} bind:value={$formData.genre} placeholder={t.FIELD_GENRE_PLACEHOLDER} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} class="w-1/2" name="label">
    <Form.Control let:attrs>
      <Form.Label>{t.FIELD_LABEL}</Form.Label>
      <Input {...attrs} bind:value={$formData.label} placeholder={t.FIELD_LABEL_PLACEHOLDER} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
</div>

<div class="flex gap-2">
  <Form.Field {form} class="w-1/2" name="releaseDate">
    <Form.Control>
      <Form.Label>{t.FIELD_RELEASE_DATE}</Form.Label>
      <ReleaseDatePickerField />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>

  <Form.Field {form} class="w-1/2" name="type">
    <Form.Control let:attrs>
      <Form.Label>{t.FIELD_TYPE}</Form.Label>
      <Input {...attrs} bind:value={$formData.type} placeholder={t.FIELD_TYPE_PLACEHOLDER} />
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
</div>
