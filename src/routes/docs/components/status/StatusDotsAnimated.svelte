<script>
	import { COLORS } from '@ubeac/svelte/types'
	import { Status } from '@ubeac/svelte'
	import { El } from '@ubeac/svelte/components'
</script>

<El display="flex" gap="2">
	{#each COLORS as color}
		<Status style="dot" animated {color} />
	{/each}
</El>
