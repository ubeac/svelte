<script>
	import { AppLoadingBar, Button } from '@ubeac/svelte/components'

	let show = false
</script>

<Button on:click={() => (show = true)}>Show</Button>

<AppLoadingBar {show} />
