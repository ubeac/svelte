<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Textarea } from '$lib/components'
</script>

<Meta
	title="Textarea"
	component={Textarea}
	parameters={{
		actions: {
			handles: ['change'],
		},
	}} />

<Story name="Default" let:args>
	<Textarea {...args} />
</Story>

<Story name="Disabled" let:args>
	<Textarea disabled value="this is disabled" {...args} />
</Story>

<Story name="Placeholder" let:args>
	<Textarea placeholder="This is placeholder" {...args} />
</Story>

<Story name="Preview" let:args>
	<Textarea placeholder="This is placeholder" value="this is value" preview {...args} />
</Story>

<Story name="Readonly" let:args>
	<Textarea readonly value="this is read-only value" {...args} />
</Story>
