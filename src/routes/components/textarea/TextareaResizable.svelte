<script>
	import { Textarea } from '@ubeac/svelte'

	let value = ''
</script>

<Textarea rows="10" noResize bind:value />

<p if={value.length > 0}>{value}</p>
