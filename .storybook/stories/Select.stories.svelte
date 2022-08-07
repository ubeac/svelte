<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Select } from '$lib/components'
</script>

<Meta title="Select" component={Select} />

<Template let:args>
	<Select {...args} />
</Template>

<Story name="default" />
<Story name="items ArrayOfNumbers" args={{ items: [123, 213, 34, 451, 345, 392] }} />
<Story name="items ArrayOfStrings" args={{ items: ['a', 'b', 'c', 'd', 'e'] }} />
<Story name="items Object" args={{ items: { first: 'FIRST', second: 'SECOND', third: 'THIRD' } }} />
<Story
	name="items ArrayOfObjects"
	args={{
		items: [
			{ key: 'a', value: 'A' },
			{ key: 'b', value: 'B' },
			{ key: 'c', value: 'C' },
		],
		key: 'key',
		text: 'value',
	}} />
<Story name="preview" args={{ value: 'c', preview: true, items: ['a', 'b', 'c'] }} />
<Story name="value" args={{ value: 'c', items: ['a', 'b', 'c'] }} />
