<script lang="ts">
	import { Button, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Button shape="tile" {color}>{color}</Button>
{/each}
