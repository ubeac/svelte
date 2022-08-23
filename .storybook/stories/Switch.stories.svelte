<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Switch } from '$lib/components'
	import { COLORS } from '$lib/types';
</script>

<Meta component={Switch} title="Switch" argTypes={{ value: { control: 'boolean' } , color: {
	defaultValue: 'auto',
	control: {
		type: 'select',
		default: 'primary',
		options: COLORS,
	},
}, }} />

<Story name="Default" let:args>
	<Switch {...args} />
</Story>


<Story name="Disabled" let:args>
	<Switch disabled {...args} />
</Story>

<Story name="Value" let:args>
	<Switch value {...args} />
</Story>

<Story name="color:dagner" let:args>
	<Switch value {...args} color="danger" />
</Story>
