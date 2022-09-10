<script>
	import { Button, Badge } from '@ubeac/svelte'

	let show = false
</script>

<Button on:click={() => (show = !show)}>Toggle</Button>

<Badge
	shape="tile"
	color="secondary"
	href="/components/badges"
	class="customized-badge-class-for-test long class name"
	if={show}>badge</Badge>
