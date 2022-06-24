<script lang="ts">
	import { Radio } from '$lib/components'

	let model1 = undefined
	let gender = 'F'

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
