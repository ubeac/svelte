<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import FormRadioGroupColor from './FormRadioGroupColor.svelte'
	import FormRadioGroupLabel from './FormRadioGroupLabel.svelte'
	import FormRadioGroupInlineLabel from './FormRadioGroupInlineLabel.svelte'
	import FormRadioGroupColumns from './FormRadioGroupColumns.svelte'
</script>

<h1>FormRadioGroup</h1>
<p>
	This component is similar to <a href="/docs/components/radio-group">RadioGroup</a> and has some additional features
</p>

<Doc title="Label">
	You can add label to FormRadioGroup by providing <code>label</code> prop.
</Doc>
<Preview src="./FormRadioGroupLabel.svelte">
	<FormRadioGroupLabel />
</Preview>

<Doc title="Inline & Label">
	You can have <code>label</code> & <code>inline</code> in same time.
</Doc>
<Preview src="./FormRadioGroupInlineLabel.svelte">
	<FormRadioGroupInlineLabel />
</Preview>

<Doc title="Colors">
	You can change background colors of <i>selected</i> radio by providing <code>color</code> prop to FormRadioGroup.
</Doc>
<Preview src="./FormRadioGroupColor.svelte">
	<FormRadioGroupColor />
</Preview>

<Doc title="Column width">
	You can set column width using <code>cols</code> prop
</Doc>
<Preview src="./FormRadioGroupColumns.svelte">
	<FormRadioGroupColumns />
</Preview>
