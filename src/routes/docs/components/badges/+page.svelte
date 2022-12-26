<script>
	import { Doc, Preview } from '$lib/components/index.js'

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

<Doc title="Default">The default badges are square and come in the basic set of colors.</Doc>
<Preview src="./BadgeDefault.svelte">
	<BadgeDefault />
</Preview>

<Doc title="Colors">
	You can create a soft colour variant of a corresponding contextual badge variation, to make it look more subtle.
</Doc>
<Preview src="./BadgeColors.svelte">
	<BadgeColors />
</Preview>

<Doc title="Outline">
	Use the <code>outline</code> prop if you want to remove the color and the background of your badge and give it a more subtle
	look.
</Doc>
<Preview src="./BadgeOutlines.svelte">
	<BadgeOutlines />
</Preview>

<Doc title="Ghost">
	Use the <code>ghost</code> prop to make your badge look simple yet aesthetically appealing.
</Doc>
<Preview src="./BadgeGhosts.svelte">
	<BadgeGhosts />
</Preview>

<Doc title="Badge Shapes">
	Use the <code>shape</code> prop to change your badge shape.
</Doc>
<Preview src="./BadgeShapes.svelte">
	<BadgeShapes />
</Preview>

<Doc title="Badge with headings">Badges can be used as part of heading element.</Doc>
<Preview src="./BadgeHeadings.svelte">
	<BadgeHeadings />
</Preview>

<Doc title="Numbers and shapes">
	<!--  -->
</Doc>
<Preview src="./BadgeNumbers.svelte">
	<BadgeNumbers />
</Preview>

<Doc title="Badge as dot">
	Use the <code>dot</code> prop if you want to create a badge with rounded corners. Its width will adjust to the label text.
</Doc>
<Preview src="./BadgeDots.svelte">
	<BadgeDots />
</Preview>

<Doc title="Badge links">
	Place the link at badge <code>href</code> prop if you want it to perform the function of a link and make it clickable.
</Doc>
<Preview src="./BadgeLinks.svelte">
	<BadgeLinks />
</Preview>

<Doc title="Badge inside Button">Badges can be used as part of links or buttons to provide a counter.</Doc>
<Preview src="./BadgeButtons.svelte">
	<BadgeButtons />
</Preview>

<Doc title="Badge with blinking effect">
	<!--  -->
</Doc>
<Preview src="./BadgeBlink.svelte">
	<BadgeBlink />
</Preview>
