<script lang="ts">
	import { Badge, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Badge dot {color} />
{/each}
