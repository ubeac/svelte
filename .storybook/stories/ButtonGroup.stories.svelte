<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button } from '@app/components'
</script>

<Meta
	title="ButtonGroup"
	component={Button.Group}
	argTypes={{
		size: {
			control: 'radio',
			options: ['sm', 'md', 'lg'],
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

<Story name="small buttons" args={{ size: 'sm' }} />
<Story name="medium buttons" args={{ size: 'md' }} />
<Story name="large buttons" args={{ size: 'lg' }} />
