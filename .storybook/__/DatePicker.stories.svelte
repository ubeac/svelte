<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { DatePicker } from '$lib/components'
	let value = '2022/08/09'
	let value2 = '2022 August 09'
</script>

<Meta
	title="DatePicker"
	component={DatePicker}
	argTypes={{
		format: {
			control: {
				type: 'text',
			},
		},
		value: {
			control: {
				type: 'date',
			},
		},
	}} />

<Template let:args>
	<DatePicker {...args} />
</Template>

<Story name="default">
	<DatePicker />
</Story>
<Story name="format">
	<DatePicker value={value2} format="YYYY MMMM DD" />
</Story>
<Story name="value">
	<DatePicker bind:value />
</Story>
