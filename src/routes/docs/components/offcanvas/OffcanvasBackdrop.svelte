<script>
	import { Button, Offcanvas, El, Icon } from '@ubeac/svelte'

	let showBackdrop = false
	const toggleBackdrop = () => (showBackdrop = !showBackdrop)

	let showScroll = false
	const toggleScroll = () => (showScroll = !showScroll)
</script>

<Button color="primary" on:click={toggleBackdrop}>Offcanvas with backdrop</Button>
<Button color="primary" on:click={toggleScroll}>Offcanvas with backdrop and scroll</Button>

<Offcanvas placement="start" show={showBackdrop} backdrop>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas Header</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggleBackdrop}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>

<Offcanvas placement="start" show={showScroll} backdrop scroll>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas Header</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggleScroll}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>
