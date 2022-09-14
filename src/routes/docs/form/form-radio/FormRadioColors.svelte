<script>
	import { FormRadio, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<FormRadio label={color} {color} />
{/each}
