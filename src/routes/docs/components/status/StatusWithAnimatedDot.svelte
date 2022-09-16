<script>
	import { COLORS } from '@ubeac/svelte/types'
	import { Status } from '@ubeac/svelte'
</script>

{#each COLORS as color}
	<Status {color}>
		<Status animated dot {color} />
		{color}
	</Status>
{/each}
