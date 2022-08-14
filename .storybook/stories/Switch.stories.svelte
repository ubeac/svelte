<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Switch } from '$lib/components'
</script>

<Meta component={Switch} title="Switch" argTypes={{ value: { control: 'boolean' } }} />

<Story name="Default" let:args>
	<Switch {...args} />
</Story>

<Story name="Disabled" let:args>
	<Switch disabled {...args} />
</Story>

<Story name="Value" let:args>
	<Switch value {...args} />
</Story>
