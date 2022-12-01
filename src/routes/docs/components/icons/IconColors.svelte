<script>
	import { Icon, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Icon name="user" {color} />
{/each}
