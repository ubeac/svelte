<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Switch } from '$lib/components'
	import { COLORS } from '$lib/types'
</script>

<Meta
	component={Switch}
	title="Inputs/Switch"
	argTypes={{
		value: { control: 'boolean' },
		label: {
			control: 'text',
		},
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
	}} />

<Story name="Default" let:args>
	<Switch {...args} />
</Story>

<Story name="Colors" let:args>
	<div class="example-switch">
		{#each COLORS as color}
			<Switch {...args} {color} label={color} value />
		{/each}
	</div>
</Story>

<Story name="Disabled" let:args>
	<Switch disabled {...args} />
</Story>
