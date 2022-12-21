<script>
	import { FormSwitch } from '@ubeac/svelte'

	let checked = false
</script>

<FormSwitch bind:value={checked} text="Switch {checked}" label="Form Switch" />
