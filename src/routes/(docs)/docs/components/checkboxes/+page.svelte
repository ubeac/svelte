<script>
	import { Doc, Preview } from '$lib/docs-components'
	import CheckboxColor from './CheckboxColor.svelte'
	import CheckboxLabel from './CheckboxLabel.svelte'
	import CheckboxDescription from './CheckboxDescription.svelte'
	import CheckboxReverse from './CheckboxReverse.svelte'
	import CheckboxInline from './CheckboxInline.svelte'
	import CheckboxDisabled from './CheckboxDisabled.svelte'
	import CheckboxIndeterminate from './CheckboxIndeterminate.svelte'
</script>

<h1>Checkbox</h1>
<p>
	Use Checkbox if you want to allow users to select more than one option from a set of predefined options or to turn an
	option on or off.
</p>

<Doc title="Label">
	You can use the <code>label</code> property to display in front of the checkbox. Also, you can use the default
	<code>slot</code> to display a custom label.
</Doc>
<Preview src="./CheckboxLabel.svelte">
	<CheckboxLabel />
</Preview>

<Doc title="Description">
	Checkbox can have description, to display the description below the checkbox. description can have custom color. Also,
	you can use the slot <code>name="description"</code> to display a custom description.
</Doc>
<Preview src="./CheckboxDescription.svelte">
	<CheckboxDescription />
</Preview>

<Doc title="Color">
	Checkbox can have custom color, you can use the <code>color</code> property to set the backgroung color of the checked
	one.
</Doc>
<Preview src="./CheckboxColor.svelte">
	<CheckboxColor />
</Preview>

<Doc title="Disabled">
	Checkbox can be disabled, to disable the checkbox use the <code>disabled</code> boolean property.
</Doc>
<Preview src="./CheckboxDisabled.svelte">
	<CheckboxDisabled />
</Preview>

<Doc title="Indeterminate">
	Checkbox can be indeterminate, to set the checkbox indeterminate use the <code>indeterminate</code> boolean property.
</Doc>
<Preview src="./CheckboxIndeterminate.svelte">
	<CheckboxIndeterminate />
</Preview>

<Doc title="Inline">
	Checkbox can be inline, to display the checkbox in the same line with the sibling element. Use the <code>inline</code>
	boolean property.
</Doc>
<Preview src="./CheckboxInline.svelte">
	<CheckboxInline />
</Preview>

<Doc title="Reverse">
	Put checkboxes on the opposite side with the <code>reverse</code> boolean property.
</Doc>
<Preview src="./CheckboxReverse.svelte">
	<CheckboxReverse />
</Preview>
