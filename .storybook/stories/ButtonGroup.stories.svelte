<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button, ButtonGroup } from '$lib/components'

	const SIZES = ['sm', 'md', 'lg']
</script>

<Meta
	title="ButtonGroup"
	component={ButtonGroup}
	argTypes={{
		size: {
			control: 'radio',
			options: SIZES,
		},
	}} />

<Template let:args>
	<ButtonGroup {...args}>
		<Button>Button</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</ButtonGroup>
</Template>

<Story name="default" />
<Story name="vertical" args={{ vertical: true }} />
