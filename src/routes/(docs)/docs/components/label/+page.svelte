<script>
	import { Doc, Preview } from '$lib/docs-components'
	import LabelDefault from './LabelDefault.svelte'
	import LabelFor from './LabelFor.svelte'
	import LabelRequired from './LabelRequired.svelte'
</script>

<h1>Label</h1>
<p>Label component is used to set a name or some identifier for Form Elements.</p>

<Doc title="Default Markup">
	<!--  -->
</Doc>
<Preview vertical src="./LabelDefault.svelte">
	<LabelDefault />
</Preview>

<Doc title="For">
	You should set id of the form element to <code>for</code> prop of Label, to connect them together.
</Doc>
<Preview vertical src="./LabelFor.svelte">
	<LabelFor />
</Preview>

<Doc title="Required">Shows a required Mark after the label text.</Doc>
<Preview vertical src="./LabelRequired.svelte">
	<LabelRequired />
</Preview>
