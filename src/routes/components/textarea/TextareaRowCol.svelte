<script>
	import { Textarea } from '@ubeac/svelte'

	let value = ''
</script>

<Textarea rows={5} placeholder="10 columns and 5 rows" bind:value />

<p if={value.length > 0}>{value}</p>
