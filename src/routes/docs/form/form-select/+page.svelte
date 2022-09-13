<script>
	import Preview from '@ubeac/svelte/components/preview/Preview.svelte'
	import FormSelectLabel from './FormSelectLabel.svelte'
	import FormSelectColumn from './FormSelectColumn.svelte'
	import FormSelectRequired from './FormSelectRequired.svelte'
</script>

<h1>FormSelect</h1>
<p>Add one of the available selects a dropdown select - to let users choose from a predefined set of options.</p>

<h2>Label</h2>
<p>You can set a label for FormSelect.</p>
<Preview src="./FormSelectLabel.svelte">
	<div class="example-formselect">
		<FormSelectLabel />
	</div>
</Preview>

<h2>Required</h2>
<p>You can mark it as a required field like this:</p>
<Preview src="./FormSelectRequired.svelte">
	<div class="example-formselect">
		<FormSelectRequired />
	</div>
</Preview>

<h2>Col</h2>
<p>You can set a col for FormSelect.</p>
<Preview src="./FormSelectColumn.svelte">
	<FormSelectColumn />
</Preview>

<style>
	h2 {
		margin-top: 2rem;
	}

	.example-formselect {
		width: 100%;
	}
</style>
