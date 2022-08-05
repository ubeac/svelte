<script lang="ts">
	import { Card, CardBody, FormCheckboxGroup } from '$lib/components'
	import FormFieldset from '$lib/components/form/FormFieldset.svelte'

	let items = [
		{ label: 'first', val: 1 },
		{ label: 'second', val: 2 },
		{ label: 'third', val: 3 },
		{ label: 'fourth', val: 4 },
		{ label: 'fifth', val: 5 },
	]

	let value: number[] = []

	$: console.log({ value })
</script>

<Card outline>
	<CardBody>
		<FormFieldset>
			<FormCheckboxGroup key="val" text="label" label="inline" inline {items} bind:value />
		</FormFieldset>
		<FormFieldset>
			<FormCheckboxGroup key="val" text="label" label="Default" {items} bind:value />
		</FormFieldset>
		<FormFieldset>
			<FormCheckboxGroup key="val" text="label" label="preview" preview {value} />
		</FormFieldset>
	</CardBody>
</Card>
