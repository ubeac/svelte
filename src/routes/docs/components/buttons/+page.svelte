<script>
	import { Preview } from '$lib/components'

	import ButtonColors from './ButtonColors.svelte'
	import ButtonDefault from './ButtonDefault.svelte'
	import ButtonDisabled from './ButtonDisabled.svelte'
	import ButtonGhost from './ButtonGhost.svelte'
	import ButtonGroup from './ButtonGroup.svelte'
	import ButtonGroupLotsOfItems from './ButtonGroupLotsOfItems.svelte'
	import ButtonIcon from './ButtonIcon.svelte'
	import ButtonLarge from './ButtonLarge.svelte'
	import ButtonLoading from './ButtonLoading.svelte'
	import ButtonOutline from './ButtonOutline.svelte'
	import ButtonRound from './ButtonRound.svelte'
	import ButtonSmall from './ButtonSmall.svelte'
	import ButtonTag from './ButtonTag.svelte'
	import ButtonTile from './ButtonTile.svelte'
	import ButtonWithAvatar from './ButtonWithAvatar.svelte'
</script>

<h1>Buttons</h1>
<p>
	Buttons are the most important UI Element in each page, @ubeac/svelte buttons are beautiful and fully customizable.
</p>

<h2>Button Tags</h2>
<p>You can use <code>button</code> or <code>a</code> tags as a base for your Button.</p>
<Preview src="./ButtonTag.svelte">
	<ButtonTag />
</Preview>

<h2>Default button</h2>
<p>
	The standard button creates a white background and subtle hover animation. It’s meant to look and behave as an
	interactive element of your page.
</p>
<Preview src="./ButtonDefault.svelte">
	<ButtonDefault />
</Preview>

<h2>Colors</h2>
<p>
	You can use <code>color</code> prop to choose color for your button. The big range of available colors will help you show
	your buttons’ purpose and make them easy to spot.
</p>
<Preview src="./ButtonColors.svelte">
	<ButtonColors />
</Preview>

<h2>Disabled buttons</h2>
<p>
	Make buttons look inactive to show that an action is possible once the user meets certain criteria, such as completing
	the required fields to submit a form.
</p>

<Preview src="./ButtonDisabled.svelte">
	<ButtonDisabled />
</Preview>

<h2>Ghost buttons</h2>
<p>
	Use the <code>ghost</code> prop to make your button look simple yet aesthetically appealing.
</p>

<Preview src="./ButtonGhost.svelte">
	<ButtonGhost />
</Preview>

<h2>Tile buttons</h2>
<Preview src="./ButtonTile.svelte">
	<ButtonTile />
</Preview>

<h2>Pill buttons</h2>
<Preview src="./ButtonRound.svelte">
	<ButtonRound />
</Preview>

<h2>Outline buttons</h2>
<p>
	add <code>outline</code> prop, if you want to remove the color and the background of your button and give it a more subtle
	look. Outline buttons are perfect to use as secondary buttons, as they don’t distract users from the main action.
</p>
<Preview src="./ButtonOutline.svelte">
	<ButtonOutline />
</Preview>

<h2>Button size</h2>
<p>
	set <code>size</code> prop to <code>lg</code> or <code>sm</code> to change the size of your button and differentiate those
	which should have primary focus from those of secondary importance. Adapt the button size to your design and encourage
	users to take actions.
</p>
<Preview src="./ButtonLarge.svelte">
	<ButtonLarge />
</Preview>
<br />
<Preview src="./ButtonSmall.svelte">
	<ButtonSmall />
</Preview>

<h2>Buttons with icons</h2>
<p>Label your button with text and add an icon to communiacate the action and make it easy to identify for users.</p>
<Preview src="./ButtonIcon.svelte">
	<ButtonIcon />
</Preview>

<h2>Loading buttons</h2>
<p>
	Add the <code>loading</code> prop to show a button’s loading state, which can be useful in the case of operations that
	take longer to process.
</p>
<Preview src="./ButtonLoading.svelte">
	<ButtonLoading />
</Preview>

<h2>List of buttons</h2>
<p>
	Create a list of buttons using the <code>ButtonGroup</code> component to display different actions a user can take.
</p>

<Preview src="./ButtonGroup.svelte">
	<ButtonGroup />
</Preview>
<p>
	If the list is long, by adding wrap prop for ButtonGroup, it will be wrapped and some buttons will be moved to the
	next line.
</p>
<Preview src="./ButtonGroupLotsOfItems.svelte">
	<ButtonGroupLotsOfItems />
</Preview>

<h2>Buttons with avatars</h2>
<p>
	Use buttons with avatars to simplify the process of interaction and make your design more personalized. Buttons can
	contain avatars and labels or only avatars, if displayed on a smaller space.
</p>

<Preview src="./ButtonWithAvatar.svelte">
	<ButtonWithAvatar />
</Preview>
