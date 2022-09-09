<script>
	import { Button } from '$lib/components'

	let count = 0

	let toggle = () => (count += 1)
</script>

<Button on:click={toggle}>
	Count: {count}
</Button>
