<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormSelect } from '$lib/components'

	let items = {
		first: 'this is first item',
		second: 'this is second item',
		third: 'this is third item',
		fourth: 'this is fourth item',
		fifth: 'this is fifth item',
		seventh: 'this is seventh item',
	}
</script>

<Meta
	title="Form/FormSelect"
	component={FormSelect}
	argTypes={{
		col: {
			control: 'text',
		},
		icon: {
			control: 'text',
		},
		id: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
		value: {
			control: 'text',
		},
	}} />

<Template let:args>
	<FormSelect on:changed {items} label="select" {...args} />
</Template>

<Story name="default" />
<Story name="col" args={{ col: '12' }} />
<Story name="icon" args={{ icon: 'user' }} />
<Story name="id" args={{ id: 'textarea-1' }} />
<Story name="items" args={{ items: [1, 2, 3, 4, 5] }} />
<Story name="label" args={{ label: 'label' }} />
<Story name="loading" args={{ loading: true }} />
<Story name="required" args={{ required: true }} />
<Story name="value" args={{ value: 'fifth' }} />
