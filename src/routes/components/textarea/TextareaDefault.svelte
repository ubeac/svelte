<script>
	import { Textarea } from '@ubeac/svelte'

	let value = ''
</script>

<Textarea bind:value />

<p if={value.length > 0}>{value}</p>
