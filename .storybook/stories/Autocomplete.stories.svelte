<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Autocomplete } from '$lib/components'

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

<Meta title="Autocomplete" component={Autocomplete} />

<Template let:args>
	<Autocomplete items={items1} {...args} />
	<Autocomplete items={items2} {...args} />
	<Autocomplete items={items3} key="value" {...args} />
	<Autocomplete items={items4} {...args} />
</Template>

<Story name="default" />

<Story name="placeholder" args={{ placeholder: 'this is placeholder' }} />
<Story name="preview" args={{ preview: true }} />
<Story name="readonly" args={{ readonly: true }} />
<Story name="disabled" args={{ disabled: true }} />
<Story name="multiple" args={{ multiple: true }} />
