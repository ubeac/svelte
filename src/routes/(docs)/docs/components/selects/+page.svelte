<script>
	import { Preview, Doc } from '$lib/docs-components'
	import SelectDefault from './SelectDefault.svelte'
	import SelectItems from './SelectItems.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
	import SelectSizes from './SelectSizes.svelte'
	import SelectDisabled from './SelectDisabled.svelte'
	import SelectStates from './SelectStates.svelte'
</script>

<h1>Select</h1>
<p>Select component is used to let users choose from a predefined set of options.</p>

<Doc title="Default" />
<Preview vertical src="./SelectDefault.svelte">
	<div class="custom-class"><SelectDefault /></div>
</Preview>

<Doc title="Items">Select can have custom item names.</Doc>
<Preview vertical src="./SelectItems.svelte">
	<div class="custom-class"><SelectItems /></div>
</Preview>

<Doc title="Placeholder">Select can have placeholders.</Doc>
<Preview vertical src="./SelectPlaceholder.svelte">
	<div class="custom-class"><SelectPlaceholder /></div>
</Preview>

<Doc title="Sizes"
	>You may also choose from small and large custom selects to match our similarly sized text inputs.</Doc>
<Preview vertical src="./SelectSizes.svelte">
	<div class="custom-class"><SelectSizes /></div>
</Preview>

<Doc title="Disabled"
	>Add the <code>disabled</code> boolean attribute on a select to give it a grayed out appearance and remove pointer events.</Doc>
<Preview vertical src="./SelectDisabled.svelte">
	<div class="custom-class"><SelectDisabled /></div>
</Preview>

<Doc title="States">
	You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid or invalid state to a
	select.
</Doc>
<Preview src="./SelectStates.svelte">
	<div class="custom-class"><SelectStates /></div>
</Preview>

<style>
	.custom-class > :global(.u-select) {
		margin: 0.25rem 0;
	}
</style>
