<script>
	import { Preview } from '@ubeac/svelte'
	import SelectDefault from './SelectDefault.svelte'
	import SelectItems from './SelectItems.svelte'
	import SelectMultiple from './SelectMultiple.svelte'
	import SelectPlaceholder from './SelectPlaceholder.svelte'
</script>

<h1>Select</h1>
<p>Select component is used to let users choose from a predefined set of options.</p>

<h2>Default</h2>
<Preview vertical src="./SelectDefault.svelte">
	<SelectDefault />
</Preview>

<h2>Select Items</h2>
<p>Select can have custom item names.</p>
<Preview vertical src="./SelectItems.svelte">
	<SelectItems />
</Preview>

<h2>Select Placeholder</h2>
<p>Select can have placeholders.</p>
<Preview vertical src="./SelectPlaceholder.svelte">
	<SelectPlaceholder />
</Preview>

<h2>Multiple Select</h2>
<p>Enables users to choose multiple items from a predefined set of options.</p>
<Preview vertical src="./SelectMultiple.svelte">
	<SelectMultiple />
</Preview>
