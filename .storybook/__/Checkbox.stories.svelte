<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Checkbox } from '$lib/components'
</script>

<Meta component={Checkbox} title="Checkbox" />

<Template let:args>
	<Checkbox {...args} label="checkbox1" />
</Template>

<Story name="default" />
<Story name="disabled" args={{ disabled: true }} />
<Story name="model" args={{ model: true }} />
