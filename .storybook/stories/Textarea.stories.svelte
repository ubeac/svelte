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

<Story name="default" let:args>
	<Textarea {...args} />
</Story>

<Story name="placeholder" let:args>
	<Textarea placeholder="This is placeholder" {...args} />
</Story>

<Story name="preview" let:args>
	<Textarea placeholder="This is placeholder" value="this is value" preview {...args} />
</Story>

<Story name="readonly" let:args>
	<Textarea readonly value="this is read-only value" {...args} />
</Story>

<Story name="disabled" let:args>
	<Textarea disabled value="this is disabled" {...args} />
</Story>
