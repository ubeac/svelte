<script>
	import { Avatar, AVATAR_SHAPES } from '@ubeac/svelte'
</script>

{#each AVATAR_SHAPES as shape}
	<Avatar {shape}>{shape.substring(0, 2)}</Avatar>
{/each}
