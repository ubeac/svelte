<script>
	import { FormSwitch } from '@ubeac/svelte'
	let value = false
</script>

<FormSwitch
	description="Pushes will be rejected if they attempt to update more than this. Learn more about this setting, and send us your feedback."
	required
	bind:value
	label="Pushes"
>
	Limit how many branches and tags can be updated in a single push
</FormSwitch>

<FormSwitch hint="This field is required" state="invalid" required bind:value label="Terms">
	I accept Terms of service and Privacy policy.
</FormSwitch>

<i>{value}</i>
