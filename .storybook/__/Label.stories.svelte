<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Input, Label } from '$lib/components'
</script>

<Meta title="Label" component={Label} />

<Story name="Default" let:args>
	<Label {...args}>Label text</Label>
</Story>

<Story name="Associated with input" let:args>
	<Label for="input-1" {...args}>Input</Label>
	<Input class="form-control" id="input-1" />
</Story>

<Story name="Associated with Checkbox" let:args>
	<div>
		<input type="checkbox" class="form-check-input" id="check-1" />
		<Label for="check-1" {...args}>Checkbox</Label>
	</div>
</Story>

<Story name="Required" let:args>
	<Label required {...args}>Required</Label>
</Story>
