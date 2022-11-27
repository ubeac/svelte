<script>
	import { COLORS } from '@ubeac/svelte/types'
	import { Status } from '@ubeac/svelte'
	import { El } from '@ubeac/svelte/components'
	import { StatusCircle } from '@ubeac/svelte/components'
</script>

<El display="flex" gap="3">
	{#each COLORS as color}
		<Status animated style="indicator" {color}>
			<StatusCircle />
			<StatusCircle />
			<StatusCircle />
		</Status>
	{/each}
</El>
