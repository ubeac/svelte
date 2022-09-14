<script>
	import { Preview } from '@ubeac/svelte/components'
	import FormCheckboxDefault from './FormCheckboxDefault.svelte'
	import FormCheckboxColumn from './FormCheckboxColumn.svelte'
</script>

<h1>FormCheckbox</h1>
<p>
	FormCheckbox is similar to <a href="/docs/components/checkbox">Checkbox</a> with additional Form related features.
</p>

<h2>Label</h2>
<p>FormCheckbox can have a label on top.</p>

<Preview vertical src="./FormCheckboxDefault.svelte">
	<FormCheckboxDefault />
</Preview>

<h2>Column width</h2>
<p>You can set Column width of FormCheckbox using <code>cols</code> prop.</p>

<Preview src="./FormCheckboxColumn.svelte">
	<FormCheckboxColumn />
</Preview>
