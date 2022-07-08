<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { FormAutocomplete } from '$lib/components'

	let items1 = [1, 2, 3, 10, 11, 12, 13, 21, 22, 23, 31, 32, 33]
	let items2 = ['a', 'b', 'c', 'aa', 'ab', 'ac', 'ad', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']
	let items3 = [
		{ text: 'a', value: 'A' },
		{ text: 'aa', value: 'AA' },
		{ text: 'b', value: 'B' },
		{ text: 'bb', value: 'BB' },
		{ text: 'c', value: 'C' },
		{ text: 'cc', value: 'CC' },
	]

	let items4 = {
		aa: 'this is aa',
		bb: 'this is bb',
		ab: 'this is ab',
		cd: 'this is cd',
	}
</script>

<Meta
	title="FormAutocomplete"
	component={FormAutocomplete}
	argTypes={{
		col: {
			control: {
				type: 'text',
			},
		},
		icon: {
			control: {
				type: 'text',
			},
		},
		id: {
			control: {
				type: 'text',
			},
		},
		label: {
			control: {
				type: 'text',
			},
		},
	}} />

<Template let:args>
	<FormAutocomplete items={items1} {...args} />
	<FormAutocomplete items={items2} {...args} />
	<FormAutocomplete items={items3} key="value" {...args} />
	<FormAutocomplete items={items4} {...args} />
</Template>

<Story name="default" />

<Story name="col" args={{ col: '6' }} />
<Story name="disabled" args={{ disabled: true }} />
<Story name="icon" args={{ icon: 'user' }} />
<Story name="id" args={{ id: 'autocomplete-1' }} />
<Story name="items" args={{ items: [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 21, 22, 23, 24, 25] }} />
<Story name="loading" args={{ loading: true }} />
<Story name="required" args={{ required: true }} />
