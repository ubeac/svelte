<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@types'
	import { Button } from '@components'
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
<Story name="color" args={{ color: 'blue' }} let:args>
	<Button {...args}>Button</Button>
	<br />
	{#each COLORS as color}
		<Button {color}>Button {color}</Button>
	{/each}
</Story>
<Story name="disabled" args={{ disabled: true }} />
<Story name="loading" args={{ loading: true, color: 'blue' }} />
<Story name="outline" args={{ outline: true }} />
<Story name="size" args={{ size: 'lg' }} let:args>
	<Button {...args}>Button</Button>
	<br />
	{#each ['sm', 'md', 'lg'] as size}
		<Button {...{ args, size }}>Button {size}</Button>
	{/each}
</Story>
