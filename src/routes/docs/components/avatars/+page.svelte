<script>
	import { Preview } from '@ubeac/svelte'
	import AvatarColors from './AvatarColors.svelte'
	import AvatarDefault from './AvatarDefault.svelte'
	import AvatarImage from './AvatarImage.svelte'
	import AvatarShapes from './AvatarShapes.svelte'
	import AvatarSize from './AvatarSize.svelte'
	import AvatarStatus from './AvatarStatus.svelte'
	import AvatarList from './AvatarList.svelte'
	import AvatarListStacked from './AvatarListStacked.svelte'
</script>

<h1>Avatars</h1>
<p>
	Avatars help customise various elements of a user interface and make the product experience more personalised. They
	are often used in communication apps, collaboration tools and social media.
</p>

<h2>Default markup</h2>
<p>
	Use the <code>Avatar</code> component to add an avatar to your interface design for greater customisation.
</p>
<Preview src="./AvatarDefault.svelte">
	<AvatarDefault />
</Preview>

<h2>Avatar Colors</h2>
<p>Customize the color of the avatars.</p>

<Preview src="./AvatarColors.svelte">
	<AvatarColors />
</Preview>

<h2>Avatar Shapes</h2>
<p>You can make them round or square and change their border radius.</p>

<Preview src="./AvatarShapes.svelte">
	<AvatarShapes />
</Preview>

<h2>Avatar Size</h2>
<p>you can create a standard avatar or scale it up or down to different sizes based on what you need.</p>

<Preview src="./AvatarSize.svelte">
	<AvatarSize />
</Preview>

<h2>Avatar Image and Icon</h2>
<p>Set an <code>image</code> as the background to make users easy to indentify and create a personalised experience.</p>

<Preview src="./AvatarImage.svelte">
	<AvatarImage />
</Preview>

<h2>Avatar Status</h2>
<Preview src="./AvatarStatus.svelte">
	<AvatarStatus />
</Preview>

<h2>Avatar List</h2>
<Preview src="./AvatarList.svelte">
	<AvatarList />
</Preview>

<h2>Avatar List Stacked</h2>
<Preview src="./AvatarListStacked.svelte">
	<AvatarListStacked />
</Preview>
