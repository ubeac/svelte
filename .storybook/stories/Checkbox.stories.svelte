<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Checkbox } from '$lib/components'
</script>

<Meta component={Checkbox} title="Checkbox" />

<Template let:args>
	<Checkbox {...args} />
	<Checkbox value={true} {...args} />
</Template>

<Story name="default" />

<Story name="disabled" args={{ disabled: true }} />
<Story name="id" args={{ id: 'check-1' }} />
<Story name="readonly" args={{ readonly: true }} />
<Story name="required" args={{ required: true }} />
<Story name="value" args={{ value: true }} />
