<script>
	import { FormSwitch } from '@ubeac/svelte'

	let checked = false
</script>

<FormSwitch bind:value={checked} label="Form Switch: {checked}" description="This is description of switch" />
