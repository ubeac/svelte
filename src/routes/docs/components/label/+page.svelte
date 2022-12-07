<script>
	import { Preview } from '@ubeac/svelte'
	import LabelDefault from './LabelDefault.svelte'
	import LabelFor from './LabelFor.svelte'
	import LabelRequired from './LabelRequired.svelte'
</script>

<h1>Label</h1>
<p>Label component is used to set a name or some identifier for Form Elements.</p>

<Preview vertical src="./LabelDefault.svelte">
	<LabelDefault />
</Preview>

<h2>For</h2>
<p>You should set id of the form element to <code>for</code> prop of Label, to connect them together</p>

<Preview vertical src="./LabelFor.svelte">
	<LabelFor />
</Preview>

<h2>Required</h2>
<p>Shows a required Mark after the label text</p>

<Preview vertical src="./LabelRequired.svelte">
	<LabelRequired />
</Preview>
