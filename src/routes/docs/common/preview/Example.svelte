<script>
	import { Button } from '@ubeac/svelte'

	let count = 0

	let toggle = () => (count += 1)
</script>

<Button on:click={toggle}>
	Count: {count}
</Button>
