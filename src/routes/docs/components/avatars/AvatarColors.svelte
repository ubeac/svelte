<script>
	import { Avatar, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Avatar {color}>{color.substring(0, 2)}</Avatar>
{/each}
