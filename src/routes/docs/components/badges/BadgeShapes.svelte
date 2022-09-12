<script lang="ts">
	import { Badge, BADGE_SHAPES } from '@ubeac/svelte'
</script>

{#each BADGE_SHAPES as shape}
	<Badge color="primary" {shape}>{shape}</Badge>
{/each}
