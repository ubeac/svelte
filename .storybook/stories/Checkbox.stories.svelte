<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Checkbox } from '$lib/components'
</script>

<Meta component={Checkbox} title="Components/Input/Checkbox" />

<Template let:args>
	<Checkbox {...args} />
</Template>

<Story name="default" />
<Story name="disabled" args={{ disabled: true }} />
<Story name="value" args={{ value: true }} />
