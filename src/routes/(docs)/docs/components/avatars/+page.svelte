<script>
	import { Doc, Preview } from '$lib/docs-components'
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

<Doc title="Default markup">
	Use the <code>Avatar</code> component to add an avatar to your interface design for greater customisation.
</Doc>
<Preview src="./AvatarDefault.svelte">
	<div class="custom-class">
		<AvatarDefault />
	</div>
</Preview>

<Doc title="Avatar Colors">Customize the color of the avatars.</Doc>

<Preview src="./AvatarColors.svelte">
	<div class="custom-class">
		<AvatarColors />
	</div>
</Preview>

<Doc title="Avatar Shapes">You can make them round or square and change their border radius.</Doc>

<Preview src="./AvatarShapes.svelte">
	<div class="custom-class">
		<AvatarShapes />
	</div>
</Preview>

<Doc title="Avatar Size">
	you can create a standard avatar or scale it up or down to different sizes based on what you need.
</Doc>
<Preview src="./AvatarSize.svelte">
	<div class="custom-class">
		<AvatarSize />
	</div>
</Preview>

<Doc title="Avatar Image and Icon">
	Set an <code>image</code> as the background to make users easy to indentify and create a personalised experience.
</Doc>
<Preview src="./AvatarImage.svelte">
	<div class="custom-class">
		<AvatarImage />
	</div>
</Preview>

<Doc title="Avatar Status" />
<Preview src="./AvatarStatus.svelte">
	<div class="custom-class">
		<AvatarStatus />
	</div>
</Preview>

<Doc title="Avatar List" />
<Preview src="./AvatarList.svelte">
	<AvatarList />
</Preview>

<Doc title="Avatar List Stacked" />
<Preview src="./AvatarListStacked.svelte">
	<AvatarListStacked />
</Preview>

<style>
	.custom-class > :global(.u-avatar) {
		margin-bottom: 0.2rem;
	}
</style>
