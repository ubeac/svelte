<script lang="ts">
	import { Button, COLORS } from '@ubeac/svelte'

	// default color doesn't support ghost state
	//$: colors = COLORS.filter((color) => color !== 'default')
</script>

{#each COLORS as color}
	<Button ghost {color}>{color}</Button>
{/each}
