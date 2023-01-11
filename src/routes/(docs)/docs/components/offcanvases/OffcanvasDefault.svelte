<script>
	import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from '@ubeac/svelte'
	let show = false

	const toggle = () => {
		show = !show
	}
</script>

<Button color="primary" on:click={toggle}>Tggle offcanvas</Button>

<Offcanvas bind:show>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>
