<script>
	import { Button, Offcanvas, El, Icon } from '@ubeac/svelte'
	let showStart = false
	let showEnd = false
	let showTop = false
	let showBottom = false
	const toggleStart = () => (showStart = !showStart)
	const toggleEnd = () => (showEnd = !showEnd)
	const toggleTop = () => (showTop = !showTop)
	const toggleBottom = () => (showBottom = !showBottom)
</script>

<El row>
	<El col="3"><Button color="primary" on:click={toggleStart}>Offcanvas in Start</Button></El>
	<El col="3"><Button color="primary" on:click={toggleEnd}>Offcanvas in End</Button></El>
	<El col="3"><Button color="primary" on:click={toggleTop}>Offcanvas in Top</Button></El>
	<El col="3"><Button color="primary" on:click={toggleBottom}>Offcanvas in Bottom</Button></El>
</El>
<Offcanvas placement="start" show={showStart}>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas Start</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggleStart}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>

<Offcanvas placement="end" show={showEnd}>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas End</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggleEnd}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>

<Offcanvas placement="top" show={showTop}>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas Start</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggleTop}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>

<Offcanvas placement="bottom" show={showBottom}>
	<El row>
		<El col><h3 class="my-3 text-start">Offcanvas Start</h3></El>
		<El col="auto" vAlign="middle" mt="2" me="2" on:click={toggleBottom}>
			<Icon name="square-x" textAlign="end" />
		</El>
	</El>
	<p>And here's some amazing content. It's very engaging. Right?</p>
</Offcanvas>
