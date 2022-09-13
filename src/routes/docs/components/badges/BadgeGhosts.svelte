<script lang="ts">
	import { Badge, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Badge {color} ghost>{color}</Badge>
{/each}
