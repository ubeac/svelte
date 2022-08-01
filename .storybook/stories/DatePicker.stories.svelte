<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { DatePicker } from '$lib/components'
</script>

<Meta
	title="Components/Input/DatePicker"
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
		preview: {
			control: {
				type: 'boolean',
			},
		},
	}} />

<Template let:args>
	<DatePicker {...args} />
</Template>

<Story name="default" />
<Story name="format" args={{ value: Date.now(), format: 'yyyy/MM/dd' }} />
<Story name="preview" args={{ preview: true }} />
<Story name="value" args={{ value: Date.now() }} />
