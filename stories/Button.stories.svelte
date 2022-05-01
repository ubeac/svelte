<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '../src/types'
	import { Button } from '../src/components'
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		size: {
			defaultValue: 'md',
			control: {
				type: 'select',
				options: ['sm', 'md', 'lg'],
			},
		},
	}} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="default" />
<Story name="block" args={{ block: true }} />
<Story name="color" args={{ color: 'blue' }} />
<Story name="disabled" args={{ disabled: true }} />
<Story name="loading" args={{ loading: true, color: 'blue' }} />
<Story name="outline" args={{ outline: true }} />
<Story name="size" args={{ size: 'lg' }} />
