<script>
	import { Preview } from '$lib/components'
	import AvatarColors from './AvatarColors.svelte'
	import AvatarShapes from './AvatarShapes.svelte'
</script>

<h1>Avatars</h1>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum ad doloribus fugiat incidunt esse quo fugit
	architecto itaque! Voluptatem ducimus beatae maiores veritatis laborum libero pariatur quasi voluptates blanditiis?
</p>
<h2>Default</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nostrum corporis dolore voluptatum veniam illo
	voluptatibus quia repudiandae reprehenderit laboriosam, recusandae aliquam illum eligendi quibusdam quo ducimus autem
	facilis incidunt.
</p>

<h2>Colors</h2>
<p>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eligendi ab, maxime minima repellendus labore ipsum
	quas exercitationem tempore recusandae eveniet id animi voluptate vitae nisi aliquam saepe hic similique!
</p>

<Preview src="./AvatarColors.svelte">
	<AvatarColors />
</Preview>

<h2>Shapes</h2>
<p>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eligendi ab, maxime minima repellendus labore ipsum
	quas exercitationem tempore recusandae eveniet id animi voluptate vitae nisi aliquam saepe hic similique!
</p>

<Preview src="./AvatarShapes.svelte">
	<AvatarShapes />
</Preview>
