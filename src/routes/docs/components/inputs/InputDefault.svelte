<script>
	import { Input } from '@ubeac/svelte'

	let value
	$: console.log(value)
</script>

<Input bind:value />
