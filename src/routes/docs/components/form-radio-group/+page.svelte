<script>
	import { Preview } from '@ubeac/svelte/components'
	import FormRadioGroupColor from './FormRadioGroupColor.svelte'
	import FormRadioGroupLabel from './FormRadioGroupLabel.svelte'
	import FormRadioGroupInlineLabel from './FormRadioGroupInlineLabel.svelte'
	import FormRadioGroupColumns from './FormRadioGroupColumns.svelte'
</script>

<h1>FormRadioGroup</h1>
<p>
	This component is similar to <a href="/docs/components/radio-group">RadioGroup</a> and has some additional features
</p>

<h2>Label</h2>
<Preview vertical src="./FormRadioGroupLabel.svelte">
	<FormRadioGroupLabel />
</Preview>

<h2>Inline & Label</h2>
<p>You can have <code>label</code> & <code>inline</code> in same time.</p>
<Preview src="./FormRadioGroupInlineLabel.svelte">
	<FormRadioGroupInlineLabel />
</Preview>

<h2>Colors</h2>
<p>You can change colors of radios by providing <code>color</code> prop to FormRadioGroup.</p>
<Preview src="./FormRadioGroupColor.svelte">
	<FormRadioGroupColor />
</Preview>

<h2>Column width</h2>
<p>
	You can set column width using <code>cols</code> prop
</p>
<Preview vertical src="./FormRadioGroupColumns.svelte">
	<FormRadioGroupColumns />
</Preview>
