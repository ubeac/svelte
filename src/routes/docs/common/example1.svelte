<script>
	import { Button } from '$lib/components/index.js'

	let count = 0

	let toggle = () => (count += 1)
</script>

<Button on:click={toggle}>
	Count: {count}
</Button>
