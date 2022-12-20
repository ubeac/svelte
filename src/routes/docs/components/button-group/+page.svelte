<script>
	import { Doc, Preview } from '$lib/components'

	import ButtonGroupDefault from './ButtonGroupDefault.svelte'
	import ButtonGroupSizes from './ButtonGroupSizes.svelte'
	import ButtonGroupVertical from './ButtonGroupVertical.svelte'
	import ButtonGroupIcons from './ButtonGroupIcons.svelte'
</script>

<h1>Buttons</h1>
<p>
	Buttons are the most important UI Element in each page, @ubeac/svelte buttons are beautiful and fully customizable.
</p>

<Doc title="List of buttons">
	Create a list of buttons using the <code>ButtonGroup</code> component to display different actions a user can take.
</Doc>

<Preview src="./ButtonGroupDefault.svelte">
	<ButtonGroupDefault />
</Preview>

<Doc title="Button Group Sizes">
	Instead of applying button sizing classes to every button in a group, just set size property to ButtonGroup.
</Doc>
<Preview src="./ButtonGroupSizes.svelte">
	<ButtonGroupSizes />
</Preview>

<Doc title="Button Group Icons">Set an icon in to ButtonGroup.</Doc>
<Preview src="./ButtonGroupIcons.svelte">
	<ButtonGroupIcons />
</Preview>

<Doc title="Vertical variation">Make a set of buttons appear vertically stacked rather than horizontally.</Doc>
<Preview src="./ButtonGroupVertical.svelte">
	<ButtonGroupVertical />
</Preview>
