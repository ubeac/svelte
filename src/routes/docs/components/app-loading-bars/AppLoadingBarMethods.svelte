<script lang="ts">
	import { AppLoadingBar, Button } from '@ubeac/svelte'

	let loadingBar: any

	let show = false
</script>

<Button on:click={() => loadingBar.start()}>Start</Button>
<Button on:click={() => loadingBar.done()}>End</Button>
<Button on:click={() => loadingBar.push()}>Push</Button>
<Button on:click={() => loadingBar.pop()}>Pop</Button>

<AppLoadingBar bind:this={loadingBar} />
