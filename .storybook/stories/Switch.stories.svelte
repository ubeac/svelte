<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Switch } from '$lib/components'
</script>

<Meta component={Switch} title="Components/Input/Switch" argTypes={{ value: { control: 'boolean' } }} />

<Template let:args>
	<Switch {...args} />
</Template>

<Story name="default" />
<Story name="disabled" args={{ disabled: true }} />
<Story name="value" args={{ value: true }} />
