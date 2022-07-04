<script lang="ts">
	import { Checkbox, DatePicker, FormCheckbox, FormRadio, Radio } from '$lib/components'

	let value: any = undefined
</script>

<div class="p-2">
	<DatePicker bind:value />
	{value}
	<br />
	<Checkbox bind:value />
	<br />
	<br />
	<br />
	<FormCheckbox bind:value />
	<FormCheckbox bind:value description="description" />
	<FormCheckbox bind:value inline />
	<FormCheckbox bind:value inline label="label" />
	<FormCheckbox bind:value inline label="label" />
	<FormCheckbox bind:value inline label="label" />
	<FormCheckbox bind:value label="label" description="description" />
	<br />
	<br />
	<br />
	<Radio bind:group={value} name="a" value="1" />
	<Radio bind:group={value} name="a" value="2" />
	<Radio bind:group={value} name="a" value="3" />
	<br />
	<br />
	<br />
	<FormRadio bind:group={value} name="b" value="1" />
	<FormRadio bind:group={value} name="b" value="2" description="description" />
	<FormRadio bind:group={value} name="b" value="3" inline />
	<FormRadio bind:group={value} name="b" value="4" inline label="label" />
	<FormRadio bind:group={value} name="b" value="5" inline label="label" />
	<FormRadio bind:group={value} name="b" value="6" inline label="label" />
	<FormRadio bind:group={value} name="b" value="7" label="label" description="description" />
</div>
