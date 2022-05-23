<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@app/types'
	import { Button } from '@app/components'

	const SIZES = ['sm', 'md', 'lg']
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
<Story name="flat" args={{ flat: true }} />
<Story name="href" args={{ href: 'https://www.google.com/' }} />
<Story name="loading" args={{ loading: true, color: 'blue' }} />
<Story name="outline" args={{ outline: true }} />
<Story name="size" let:args>
	{#each SIZES as size}
		<Button {...args} {size}>Button {size}</Button>
	{/each}
</Story>
<Story name="text" args={{ color: 'primary', text: true }} />
<Story name="tile" args={{ tile: true }} />
