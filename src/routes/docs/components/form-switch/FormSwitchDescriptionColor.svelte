<script>
	import { FormSwitch } from '@ubeac/svelte'

	let checked = false
</script>

<FormSwitch
	bind:value={checked}
	color="red"
	label="Form Switch: {checked}"
	description="This is description of switch"
	descriptionColor="red"
/>
