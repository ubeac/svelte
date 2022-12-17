<script>
	import { AppLoadingBar, Button } from '@ubeac/svelte/components'

	let show = false
</script>

<Button on:click={() => (show = true)}>Show</Button>

<br />
1000:
<AppLoadingBar {show} />

<br />
2000:
<AppLoadingBar duration={2000} {show} />

<br />
5000:
<AppLoadingBar duration={5000} {show} />
