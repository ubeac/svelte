<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import FormCheckboxDefault from './FormCheckboxDefault.svelte'
	import FormCheckboxColumn from './FormCheckboxColumn.svelte'
	import FormCheckboxDescription from './FormCheckboxDescription.svelte'
	import FormCheckboxReverse from './FormCheckboxReverse.svelte'
</script>

<h1>FormCheckbox</h1>
<p>
	FormCheckbox is similar to <a href="/docs/components/checkbox">Checkbox</a> with additional Form related features.
</p>

<Doc title="Label">FormCheckbox can have a label on top.</Doc>
<Preview vertical src="./FormCheckboxDefault.svelte">
	<FormCheckboxDefault />
</Preview>

<Doc title="Description">FormCheckbox can have descriptions.</Doc>
<Preview vertical src="./FormCheckboxDescription.svelte">
	<FormCheckboxDescription />
</Preview>

<Doc title="Reverse">
	Put Checkbox on the opposite side with the <code>reverse</code> boolean property.
</Doc>
<Preview src="./FormCheckboxReverse.svelte">
	<FormCheckboxReverse />
</Preview>

<Doc title="Layout">You can set Column width of FormCheckbox using <code>row</code> and <code>col</code> props.</Doc>
<Preview src="./FormCheckboxColumn.svelte">
	<FormCheckboxColumn />
</Preview>
