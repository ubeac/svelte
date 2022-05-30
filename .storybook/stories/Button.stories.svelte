<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@app/types'
	import { Button, Icon } from '@app/components'

	const SIZES = ['sm', 'md', 'lg']
	const SHAPES = ['circle', 'link', 'round', 'tile', undefined]
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
				options: SIZES,
			},
		},
		shape: {
			defaultValue: undefined,
			control: {
				type: 'select',
				options: SHAPES,
			},
		},
	}} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="default" />
<Story name="block" args={{ block: true }} />
<Story name="color" let:args>
	{#each COLORS as color}
		<Button {...args} {color}>Button {color}</Button>
	{/each}
</Story>
<Story name="disabled" args={{ disabled: true }} />
<Story name="elevation" args={{ elevation: 0 }} />
<Story name="ghost" args={{ color: 'primary', ghost: true }} />
<Story name="href" args={{ href: 'https://www.google.com/' }} />
<Story name="loading" args={{ loading: true, color: 'blue' }} />
<Story name="outline" args={{ outline: true }} />
<Story name="shape" let:args>
	{#each SHAPES as shape}
		<Button {...args} {shape}>Button {shape}</Button>
	{/each}
</Story>
<Story name="size" let:args>
	{#each SIZES as size}
		<Button {...args} {size}>Button {size}</Button>
	{/each}
</Story>
<Story name="icon" let:args>
	<Button {...args}>
		<Icon name="send" />
	</Button>
</Story>
<Story name="icon with text" let:args>
	<Button {...args}>
		<Icon name="send" />
		Submit
	</Button>
</Story>
