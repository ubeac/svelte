<script lang="ts">
	import { Divider } from '$lib/components'
	import { Checkbox, CheckboxGroup, RadioGroup, Select, Switch, Textarea } from '$lib/components'

	let TextareaModel = ''
	let selectMultipleModel: any[] = []
	let selectModel = 'apple'
	let radiobuttonModel = 'banana'
	let switchModel = true
	let singleCheckboxModel = true
	let multiCheckboxModel: any[] = []
	let items = [
		{ label: 'apple', value: 'apple', disabled: true },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange' },
		{ label: 'plum', value: 'plum' },
	]
</script>

<h1>Textarea</h1>
<h2>model : {TextareaModel}</h2>
<Textarea bind:value={TextareaModel} placeholder="Write somthing ..." rows="6" />
<Divider />

<h1>Select Multiple</h1>
<h2>model : {selectMultipleModel}</h2>
<Select {items} multiple bind:value={selectMultipleModel} key="value" text="label" placeholder="choose ..." />
<Divider />

<h1>Select</h1>
<h2>model : {selectModel}</h2>
<Select {items} bind:value={selectModel} key="value" text="label" placeholder="choose ..." />
<Divider />

<h1>Button Group</h1>
<h2>model : {radiobuttonModel}</h2>
<RadioGroup {items} bind:value={radiobuttonModel} />
<Divider />

<h1>Button Group inline</h1>
<h2>model : {radiobuttonModel}</h2>
<RadioGroup row {items} bind:value={radiobuttonModel} />
<Divider />

<h1>switch</h1>
<h2>model : {switchModel}</h2>
<Switch bind:value={switchModel} label="Are you sure?" />
<Divider />

<h1>checkbox</h1>
<h2>model : {singleCheckboxModel}</h2>
<Checkbox bind:model={singleCheckboxModel} label="Are you sure?" />
<Divider />

<h1>checkbox</h1>
<h2>model : {multiCheckboxModel}</h2>
<CheckboxGroup {items} bind:value={multiCheckboxModel} />

<Divider />
<h1>checkbox inline</h1>
<h2>model : {multiCheckboxModel}</h2>
<CheckboxGroup row {items} bind:value={multiCheckboxModel} />

<Divider />
