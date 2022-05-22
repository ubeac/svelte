<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button } from '@app/components'

	const SIZES = ['sm', 'md', 'lg']
</script>

<Meta
	title="ButtonGroup"
	component={Button.Group}
	argTypes={{
		size: {
			control: 'radio',
			options: SIZES,
		},
	}} />

<Template let:args>
	<Button.Group {...args}>
		<Button>Button</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</Button.Group>
</Template>

<Story name="default" />
<Story name="vertical" args={{ vertical: true }} />
