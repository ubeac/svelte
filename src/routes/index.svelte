<script lang="ts">
	import { Checkbox, Radio } from '$lib/components'

	let model1 = undefined
	let gender = 'F'

	let check1Value: boolean = false
	let check2Value: boolean = false

	setTimeout(() => {
		gender = 'M'
	}, 3000)

	function onChange(event) {
		console.log(event.target.value, event.target.checked)
	}
</script>

<Radio value="value1" bind:group={model1} on:change={onChange} />
{model1}

<br />

<Radio name="gender" value="M" bind:group={gender} on:change={onChange} />
<Radio name="gender" value="F" bind:group={gender} on:change={onChange} />
{gender}

<br />

<Checkbox bind:value={check1Value} on:change={onChange} /> - {check1Value}
<Checkbox bind:value={check2Value} on:change={onChange} /> - {check2Value}
<Checkbox bind:value={check2Value} on:change={onChange} disabled /> - {check2Value}
<Checkbox bind:value={check1Value} on:change={onChange} disabled /> - {check1Value}
<Checkbox bind:value={check2Value} on:change={onChange} indeterminate /> - {check2Value}
<Checkbox bind:value={check1Value} on:change={onChange} indeterminate /> - {check1Value}
