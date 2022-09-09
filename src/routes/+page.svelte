<script lang="ts">
	import { FormRadio, Radio, RadioGroup } from '$lib/components'

	let items = [
		{
			label: 'apple',
			value: 'apple',
		},
		{
			label: 'banana',
			value: 'banana',
		},
		{
			label: 'melon',
			value: 'melon',
		},
		{
			label: 'orange',
			value: 'orange',
		},
	]

	let groupSelected: any = null
	let singleSelected: any = null
	let formSelected: any = null

	function changeGroup(e: any) {
		const { value } = e.target
		groupSelected = value
	}

	function changeSingle(e: any) {
		const { value } = e.target
		singleSelected = value
	}
	function changeForm(e: any) {
		const { value } = e.target
		formSelected = value
	}
</script>

<h2>RadioGroup: {groupSelected}</h2>
<RadioGroup {items} on:change={changeGroup} />

<h2>Single Radio: {singleSelected}</h2>
<Radio label="radio-1" on:change={changeSingle} value="radio-1" checked={singleSelected === 'radio-1'} />
<Radio label="radio-2" on:change={changeSingle} value="radio-2" checked={singleSelected === 'radio-2'} />

<h2>FormRadio: {formSelected}</h2>
<FormRadio label="form-radio-1" value="form-radio-1" on:change={changeForm} checked={formSelected === 'form-radio-1'} />
<FormRadio label="form-radio-2" value="form-radio-2" on:change={changeForm} checked={formSelected === 'form-radio-2'} />
<FormRadio label="form-radio-3" value="form-radio-3" on:change={changeForm} checked={formSelected === 'form-radio-3'} />
