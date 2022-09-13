<script>
	import { Avatar, AVATAR_SHAPES } from '$lib/components'
</script>

{#each AVATAR_SHAPES as shape}
	<Avatar {shape}>{shape.substring(0, 2)}</Avatar>
{/each}
