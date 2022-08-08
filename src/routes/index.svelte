<script lang="ts">
	import { Divider } from '$lib/components'
	import { Checkbox, RadioGroup, Switch } from '$lib/components/index'

	let buttonModel = 'apple'
	let switchModel = true
	let singleCheckboxModel = true
	let multiCheckboxModel: any[] = []
	let items = [
		{ label: 'apple', value: 'apple' },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange' },
		{ label: 'plum', value: 'plum' },
	]
</script>

<h1>Button Group</h1>
<h2>model : {buttonModel}</h2>
<RadioGroup {items} bind:value={buttonModel} />
<Divider />

<h1>Button Group inline</h1>
<h2>model : {buttonModel}</h2>
<RadioGroup row {items} bind:value={buttonModel} />
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
{#each items as item}
	<Checkbox bind:model={multiCheckboxModel} value={item.value} label={item.label} />
{/each}

<Divider />
<h1>checkbox inline</h1>
<h2>model : {multiCheckboxModel}</h2>
{#each items as item}
	<Checkbox inline bind:model={multiCheckboxModel} value={item.value} label={item.label} />
{/each}

<Divider />
