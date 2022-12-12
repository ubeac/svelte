<script>
	import { Doc, Preview } from '@ubeac/svelte'

	import InputGroupDefault from './InputGroupDefault.svelte'
	import InputGroupSizes from './InputGroupSizes.svelte'
	import InputGroupCheckboxes from './InputGroupCheckboxes.svelte'
	import InputGroupMultipleAddons from './InputGroupMultipleAddons.svelte'
	import InputGroupButtonAddons from './InputGroupButtonAddons.svelte'
	import InputGroupIcons from './InputGroupIcons.svelte'
</script>

<h1>Input group</h1>
<p>
	Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom
	selects, and custom file inputs.
</p>

<Doc title="Basic example">
	Place one add-on or button on either side of an input. You may also place one on both sides of an input.
</Doc>
<Preview src="./InputGroupDefault.svelte">
	<InputGroupDefault />
</Preview>

<Doc title="Sizing">Set size property for input to be applied to input and its add-ons.</Doc>
<Preview src="./InputGroupSizes.svelte">
	<InputGroupSizes />
</Preview>

<Doc title="Checkboxes and radios">
	Place any checkbox or radio option within an input group’s addon instead of text.
</Doc>
<Preview src="./InputGroupCheckboxes.svelte">
	<InputGroupCheckboxes />
</Preview>

<Doc title="Multiple addons">
	Multiple add-ons are supported and can be mixed with checkbox and radio input versions.
</Doc>
<Preview src="./InputGroupMultipleAddons.svelte">
	<InputGroupMultipleAddons />
</Preview>

<Doc title="Button addons" />
<Preview src="./InputGroupButtonAddons.svelte">
	<InputGroupButtonAddons />
</Preview>

<Doc title="Icon">
	Add icons to your input to suggest users what they should enter or inform them of the current state of a form element.
</Doc>
<Preview src="./InputGroupIcons.svelte">
	<InputGroupIcons />
</Preview>
