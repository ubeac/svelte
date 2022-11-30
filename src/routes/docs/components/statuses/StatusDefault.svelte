<script>
	import { Status, COLORS } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Status {color}>{color}</Status>
{/each}
