<script>
	import { Input } from '@ubeac/svelte'

	/** @type {string} */
	let value
</script>

<Input if={2 + 2 == 4} placeholder="Only shown if 2 + 2 == 4" bind:value />
<Input if={2 + 2 == 5} placeholder="You cannot see me" />

<p if={!!value}>You typed: {value}</p>
