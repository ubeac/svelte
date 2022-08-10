<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Input } from '$lib/components'
</script>

<Meta component={Input} title="Input" />

<Template let:args>
	<Input {...args} />
</Template>

<Story name="default">
	<Input />
</Story>
<Story name="disabled">
	<Input value="test" disabled />
</Story>
<Story name="readonly">
	<Input value="test" readonly />
</Story>
<Story name="placeholder">
	<Input placeholder="this is placeholder" />
</Story>
<Story name="value">
	<Input value="test" />
</Story>
<Story name="type">
	<Input value="abcd" type="password" />
</Story>
