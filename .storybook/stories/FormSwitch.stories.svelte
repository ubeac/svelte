<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { FormSwitch } from '$lib/components'
</script>

<Meta title="FormSwitch" component={FormSwitch} />

<Story name="Default" let:args>
	<FormSwitch {...args} />
</Story>

<Story name="Label" let:args>
	<FormSwitch label="Label" {...args} />
</Story>

<Story name="Description" let:args>
	<FormSwitch label="Label" description="This is description" {...args} />
</Story>

<Story name="Inline" let:args>
	<FormSwitch label="Switch 1" inline {...args} />
	<FormSwitch label="Switch 2" inline {...args} />
	<FormSwitch label="Switch 3" inline {...args} />
</Story>

<Story name="Value" let:args>
	<FormSwitch label="Default value is false" {...args} />
	<FormSwitch label="Default value is true" value={true} {...args} />
</Story>

<Story name="Disabled + Value" let:args>
	<FormSwitch disabled label="Default value is false" {...args} />
	<FormSwitch disabled label="Default value is true" value={true} {...args} />
</Story>
