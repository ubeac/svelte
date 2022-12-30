<script>
	import { Doc, Preview } from '$lib/components'

	import ButtonColors from './ButtonColors.svelte'
	import ButtonDefault from './ButtonDefault.svelte'
	import ButtonDisabled from './ButtonDisabled.svelte'
	import ButtonGhost from './ButtonGhost.svelte'
	import ButtonIcon from './ButtonIcon.svelte'
	import ButtonLarge from './ButtonLarge.svelte'
	import ButtonLoading from './ButtonLoading.svelte'
	import ButtonOutline from './ButtonOutline.svelte'
	import ButtonRound from './ButtonRound.svelte'
	import ButtonSmall from './ButtonSmall.svelte'
	import ButtonTag from './ButtonTag.svelte'
	import ButtonTile from './ButtonTile.svelte'
	import ButtonWithAvatar from './ButtonWithAvatar.svelte'
	import ButtonSocialIcon from './ButtonSocialIcon.svelte'
	import ButtonSocial from './ButtonSocial.svelte'
</script>

<h1>Buttons</h1>
<p>
	Buttons are the most important UI Element in each page, @ubeac/svelte buttons are beautiful and fully customizable.
</p>

<Doc title="Default button">
	The standard button creates a white background and subtle hover animation. It’s meant to look and behave as an
	interactive element of your page.
</Doc>

<Preview src="./ButtonDefault.svelte">
	<ButtonDefault />
</Preview>
<Doc title="Tag">
	You can use <code>button</code> or <code>a</code> tags as a base for your Button.
</Doc>
<Preview src="./ButtonTag.svelte">
	<ButtonTag />
</Preview>

<Doc title="Colors">
	You can use <code>color</code> prop to choose color for your button. The big range of available colors will help you show
	your buttons’ purpose and make them easy to spot.
</Doc>
<Preview src="./ButtonColors.svelte">
	<div class="custom-class">
		<ButtonColors />
	</div>
</Preview>

<Doc title="Disabled buttons">
	Make buttons look inactive to show that an action is possible once the user meets certain criteria, such as completing
	the required fields to submit a form.
</Doc>

<Preview src="./ButtonDisabled.svelte">
	<div class="custom-class">
		<ButtonDisabled />
	</div>
</Preview>

<Doc title="Ghost buttons">
	Use the <code>ghost</code> prop to make your button look simple yet aesthetically appealing.
</Doc>
<Preview src="./ButtonGhost.svelte">
	<div class="custom-class">
		<ButtonGhost />
	</div>
</Preview>

<Doc title="Tile buttons">
	<!--  -->
</Doc>
<Preview src="./ButtonTile.svelte">
	<div class="custom-class">
		<ButtonTile />
	</div>
</Preview>

<Doc title="Pill buttons">
	<!--  -->
</Doc>
<Preview src="./ButtonRound.svelte">
	<div class="custom-class">
		<ButtonRound />
	</div>
</Preview>

<Doc title="Outline buttons">
	add <code>outline</code> prop, if you want to remove the color and the background of your button and give it a more subtle
	look. Outline buttons are perfect to use as secondary buttons, as they don’t distract users from the main action.
</Doc>

<Preview src="./ButtonOutline.svelte">
	<div class="custom-class">
		<ButtonOutline />
	</div>
</Preview>

<Doc title="Button size">
	set <code>size</code> prop to <code>lg</code> or <code>sm</code> to change the size of your button and differentiate those
	which should have primary focus from those of secondary importance. Adapt the button size to your design and encourage
	users to take actions.
</Doc>

<Preview src="./ButtonLarge.svelte">
	<div class="custom-class">
		<ButtonLarge />
	</div>
</Preview>
<br />
<Preview src="./ButtonSmall.svelte">
	<div class="custom-class">
		<ButtonSmall />
	</div>
</Preview>

<Doc title="Buttons with icons">
	Label your button with text and add an icon to communiacate the action and make it easy to identify for users.
</Doc>
<Preview src="./ButtonIcon.svelte">
	<div class="custom-class">
		<ButtonIcon />
	</div>
</Preview>

<Doc title="Loading buttons">
	Add the <code>loading</code> prop to show a button’s loading state, which can be useful in the case of operations that
	take longer to process.
</Doc>

<Preview src="./ButtonLoading.svelte">
	<div class="custom-class">
		<ButtonLoading />
	</div>
</Preview>

<Doc title="Buttons with avatars">
	Use buttons with avatars to simplify the process of interaction and make your design more personalized. Buttons can
	contain avatars and labels or only avatars, if displayed on a smaller space.
</Doc>

<Preview src="./ButtonWithAvatar.svelte">
	<div class="custom-class">
		<ButtonWithAvatar />
	</div>
</Preview>

<Doc title="Buttons with social media icons" />

<Preview src="./ButtonSocialIcon.svelte">
	<div class="custom-class">
		<ButtonSocialIcon />
	</div>
</Preview>

<Doc title="Social media buttons" />

<Preview src="./ButtonSocial.svelte">
	<div class="custom-class">
		<ButtonSocial />
	</div>
</Preview>

<style>
	.custom-class > :global(.u-button) {
		margin-right: 0.2rem;
		margin-bottom: 0.2rem;
	}
</style>
