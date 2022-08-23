<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Checkbox } from '$lib/components'
	import { COLORS } from '$lib/types';
</script>

<Meta component={Checkbox} title="Checkbox" argTypes={{
	color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'primary',
				options: COLORS,
			},
		},
}} />

<Template let:args>
	<Checkbox {...args} label="checkbox1" />
</Template>

<Story name="default" />
<Story name="disabled" args={{ disabled: true }} />
<Story name="model" args={{ model: true }} />
<Story name="color:danger" args={{ color: "danger" }} />
<Story name="color:warning" args={{ color: "warning" }} />
