<script lang="ts">
	import { Button, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Button shape="round" {color}>{color}</Button>
{/each}
