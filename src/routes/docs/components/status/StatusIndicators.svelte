<script>
	import { COLORS } from '@ubeac/svelte/types'
	import { Status } from '@ubeac/svelte'
  import { StatusCircle } from '@ubeac/svelte/components'
</script>

{#each COLORS as color}
	<Status  animated style="indicator" {color}>
		<StatusCircle />
		<StatusCircle />
		<StatusCircle />
	</Status>
{/each}
