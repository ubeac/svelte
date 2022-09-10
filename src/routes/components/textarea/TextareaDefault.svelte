<script>
	import { Textarea } from '@ubeac/svelte'

	let value = ''
</script>

<Textarea rows="8" placeholder="please write your description ..." bind:value />

<p if={value.length > 0}>{value}</p>
