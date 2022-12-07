<script>
	import { Radio, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Radio value {color} text={color} />
{/each}
