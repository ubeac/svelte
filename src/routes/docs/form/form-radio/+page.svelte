<script>
	import { Preview } from '@ubeac/svelte'
	import FormRadioColumns from './FormRadioColumns.svelte'

	import FormRadioLabel from './FormRadioLabel.svelte'
	import FormRadioDescription from './FormRadioDescription.svelte'
</script>

<h1>FormRadio</h1>
<p>FormRadio components are similar to Radio components but with some additional features.</p>

<h2>Label</h2>
<p>
	You can set a label using <code>label</code> prop.
</p>
<Preview src="./FormRadioLabel.svelte">
	<FormRadioLabel />
</Preview>

<h2>Colors</h2>
<p>You can Change color of FormRadio component using <code>color</code> prop</p>
<Preview src="./FormRadioColumns.svelte">
	<FormRadioColumns />
</Preview>

<h2>Description</h2>
<p>
	You can set a description for FormRadio using <code>description</code> prop.
</p>

<Preview vertical src="./FormRadioDescription.svelte">
	<FormRadioDescription />
</Preview>
