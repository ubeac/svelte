<script>
	import { Preview } from '$lib/components'

	import BadgeButtons from './BadgeButtons.svelte'
	import BadgeColors from './BadgeColors.svelte'
	import BadgeDefault from './BadgeDefault.svelte'
	import BadgeDots from './BadgeDots.svelte'
	import BadgeGhosts from './BadgeGhosts.svelte'
	import BadgeHeadings from './BadgeHeadings.svelte'
	import BadgeLinks from './BadgeLinks.svelte'
	import BadgeNumbers from './BadgeNumbers.svelte'
	import BadgeOutlines from './BadgeOutlines.svelte'
	import BadgeShapes from './BadgeShapes.svelte'
	import BadgeBlink from './BadgeBlink.svelte'
</script>

<h1>Badges</h1>
<p>
	Badges are small count and labeling components, which are used to add extra information to an interface element. You
	can use them to draw users' attention to a new element, notify about unread messages or provide any kind of additional
	info.
</p>

<h2>Default</h2>
<p>The default badges are square and come in the basic set of colors.</p>
<Preview src="./BadgeDefault.svelte">
	<BadgeDefault />
</Preview>

<h2>Colors</h2>
<p>You can create a soft colour variant of a corresponding contextual badge variation, to make it look more subtle.</p>
<Preview src="./BadgeColors.svelte">
	<BadgeColors />
</Preview>

<h2>Outline</h2>
<p>
	Use the <code>outline</code> prop if you want to remove the color and the background of your badge and give it a more subtle
	look.
</p>
<Preview src="./BadgeOutlines.svelte">
	<BadgeOutlines />
</Preview>

<h2>Ghost</h2>
<p>
	Use the <code>ghost</code> prop to make your badge look simple yet aesthetically appealing.
</p>
<Preview src="./BadgeGhosts.svelte">
	<BadgeGhosts />
</Preview>

<h2>Badge Shapes</h2>
<p>
	Use the <code>shape</code> prop to change your badge shape.
</p>
<Preview src="./BadgeShapes.svelte">
	<BadgeShapes />
</Preview>

<h2>Badge with headings</h2>
<p>Badges can be used as part of heading element.</p>
<Preview src="./BadgeHeadings.svelte">
	<BadgeHeadings />
</Preview>

<h2>Numbers and shapes</h2>
<Preview src="./BadgeNumbers.svelte">
	<BadgeNumbers />
</Preview>

<h2>Badge as dot</h2>
<p>
	Use the <code>dot</code> prop if you want to create a badge with rounded corners. Its width will adjust to the label text.
</p>
<Preview src="./BadgeDots.svelte">
	<BadgeDots />
</Preview>

<h2>Badge links</h2>
<p>
	Place the link at badge <code>href</code> prop if you want it to perform the function of a link and make it clickable.
</p>
<Preview src="./BadgeLinks.svelte">
	<BadgeLinks />
</Preview>

<h2>Badge inside Button</h2>
<p>Badges can be used as part of links or buttons to provide a counter.</p>
<Preview src="./BadgeButtons.svelte">
	<BadgeButtons />
</Preview>

<h2>Badge with blinking effect</h2>
<p />
<Preview src="./BadgeBlink.svelte">
	<BadgeBlink />
</Preview>
