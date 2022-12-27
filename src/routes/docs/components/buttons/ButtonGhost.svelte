<script lang="ts">
	import { Button, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Button ghost {color}>{color}</Button>
{/each}
