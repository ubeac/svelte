<script>
	import { AppLoadingBar, Button, FormSelect } from '@ubeac/svelte/components'
	import { COLORS } from '@ubeac/svelte/types'

	let show = false
	let color = 'primary'
</script>

<FormSelect label="Choose a Color" items={COLORS} bind:value={color} />
<Button on:click={() => (show = true)}>Show</Button>
<Button on:click={() => (show = false)}>Hide</Button>

<AppLoadingBar {show} />
