<script>
	import { Doc, Preview } from '$lib/docs-components'
	import FormFileUploaderLayout from './FormFileUploaderLayout.svelte'
	import FormFileUploaderDefault from './FormFileUploaderDefault.svelte'
	import FormFileUploaderHint from './FormFileUploaderHint.svelte'
</script>

<h1>FormFileUploader</h1>
<p>
	FormFileUploader is a fileUploader and label wrapper component to be used insisde forms. It supports all props and
	events of
	<a href="/docs/components/file-uploaders">FileUploader</a>
	and also have some additional features.
</p>

<Doc title="Label">
	Set <code>label</code> property to show input label's and bind to its id automatically.
	<code>required</code> is a booleanproperty which show an indicator on label as well. You can also use
	<code>label</code> slot.
</Doc>
<Preview src="./FormFileUploaderDefault.svelte">
	<FormFileUploaderDefault />
</Preview>

<Doc title="Hint">
	Set <code>hint</code> string property to show some useful information about the input. You can also use
	<code>hint</code> slot.
</Doc>
<Preview src="./FormFileUploaderHint.svelte">
	<FormFileUploaderHint />
</Preview>

<Doc title="Layout">
	Use default <code>row</code> and <code>col</code> properties to change layout of the FormFileUploaders inside forms.
</Doc>
<Preview src="./FormFileUploaderLayout.svelte">
	<FormFileUploaderLayout />
</Preview>
