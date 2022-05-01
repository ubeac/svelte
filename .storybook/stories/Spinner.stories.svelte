<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@app/types'
	import { Spinner } from '@app/components'
</script>

<Meta
	title="Spinner"
	component={Spinner}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		size: {
			defaultValue: 'sm',
			control: {
				type: 'select',
				options: ['sm', 'md'],
			},
		},
		style: {
			defaultValue: 'border',
			control: {
				type: 'radio',
				options: ['border', 'grow'],
			},
		},
	}} />

<Template let:args>
	<Spinner {...args} />
</Template>

<Story name="default" />
<Story name="color" args={{ color: 'blue' }} />
<Story name="size" args={{ size: 'md' }} />
<Story name="style" args={{ style: 'grow' }} />
