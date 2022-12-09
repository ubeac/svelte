<script>
	import { Button, Offcanvas, El, Icon } from '@ubeac/svelte'

	let show = false
	const toggle = () => {
		show = !show
	}
</script>

<Button color="primary" on:click={toggle}>Offcanvas will be closed by Esc key</Button>

<Offcanvas placement="start" {show} backdrop keyboard>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas Header</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggle}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>
