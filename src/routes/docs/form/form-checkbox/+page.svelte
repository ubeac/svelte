<script>
	import { Preview } from '@ubeac/svelte/components'
	import FormCheckboxDefault from './FormCheckboxDefault.svelte'
	import FormCheckboxDescription from './FormCheckboxDescription.svelte'
</script>

<h1>FormCheckbox</h1>
<p>FormCheckbox is similar to <a href="/docs/components/checkbox">Checkbox</a> with additional features.</p>

<h2>Label</h2>
<p>FormCheckbox can have a label.</p>

<Preview vertical src="./FormCheckboxDefault.svelte">
	<FormCheckboxDefault />
</Preview>

<h1>Description</h1>
<p>
	FormCheckbox can have description, to display the description below the checkbox and description can have custom
	color.
</p>

<Preview src="./FormCheckboxDescription.svelte">
	<FormCheckboxDescription />
</Preview>
