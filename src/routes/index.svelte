<script lang="ts">
	import { Divider } from '$lib/components'
	import { Checkbox, Radio, RadioGroup, Switch } from '$lib/components/index'

	let singleCheckboxModel = true
	let multiCheckboxModel: any[] = []
	let items = [
		{ label: 'apple', value: 'apple' },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange' },
		{ label: 'plum', value: 'plum' },
	]
</script>

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
