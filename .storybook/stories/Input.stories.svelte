<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Input } from '$lib/components'
</script>

<Meta component={Input} title="Input" />

<Story name="Default" let:args>
	<Input {...args} />
</Story>

<Story name="Disabled" let:args>
	<Input disabled value="This is value" {...args} />
</Story>

<Story name="Placeholder" let:args>
	<Input placeholder="This is placeholder" {...args} />
</Story>

<Story name="Preview" let:args>
	<Input preview value="This is value" {...args} />
</Story>

<Story name="Readonly" let:args>
	<Input readonly value="This is value" {...args} />
</Story>

<Story name="Type" let:args>
	<Input type="password" value="This is secret value" {...args} />
</Story>

<Story name="Value" let:args>
	<Input value="This is changed value" {...args} />
</Story>
