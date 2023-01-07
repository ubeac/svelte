<script>
	import { Preview, Doc } from '$lib/docs-components'
	import SelectDefault from './SelectDefault.svelte'
	import SelectItems from './SelectItems.svelte'
	import SelectMultiple from './SelectMultiple.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
	import SelectSizes from './SelectSizes.svelte'
	import SelectMultipleSize from './SelectMultipleSize.svelte'
	import SelectDisabled from './SelectDisabled.svelte'
</script>

<h1>Select</h1>
<p>Select component is used to let users choose from a predefined set of options.</p>

<Doc title="Default" />
<Preview vertical src="./SelectDefault.svelte">
	<div class="custom-class"><SelectDefault /></div>
</Preview>

<Doc title="Select Items">Select can have custom item names.</Doc>
<Preview vertical src="./SelectItems.svelte">
	<div class="custom-class"><SelectItems /></div>
</Preview>

<Doc title="Select Placeholder">Select can have placeholders.</Doc>
<Preview vertical src="./SelectPlaceholder.svelte">
	<div class="custom-class"><SelectPlaceholder /></div>
</Preview>

<Doc title="Multiple Select">Enables users to choose multiple items from a predefined set of options.</Doc>
<Preview vertical src="./SelectMultiple.svelte">
	<div class="custom-class"><SelectMultiple /></div>
</Preview>

<Doc title="Size attribute">Use <code>size</code> property to set the size attribute.</Doc>
<Preview vertical src="./SelectMultipleSize.svelte">
	<div class="custom-class"><SelectMultipleSize /></div>
</Preview>

<Doc title="Select Sizes"
	>You may also choose from small and large custom selects to match our similarly sized text inputs.</Doc
>
<Preview vertical src="./SelectSizes.svelte">
	<div class="custom-class"><SelectSizes /></div>
</Preview>

<Doc title="Disabled select"
	>Add the <code>disabled</code> boolean attribute on a select to give it a grayed out appearance and remove pointer events.</Doc
>
<Preview vertical src="./SelectDisabled.svelte">
	<div class="custom-class"><SelectDisabled /></div>
</Preview>

<style>
	.custom-class > :global(.u-select) {
		margin: 0.25rem 0;
	}
</style>
