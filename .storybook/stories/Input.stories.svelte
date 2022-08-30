<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Input, INPUT_SIZES } from '$lib/components'
</script>

<Meta
	title="Input"
	component={Input}
	argTypes={{
		size: {
			control: {
				type: 'select',
				options: INPUT_SIZES,
			},
		},
		placeholder: {
			control: {
				type: 'text',
			},
			defaultValue: 'Please enter first name...',
		},
		value: {
			control: {
				type: 'text',
			},
		},
	}} />

<Story name="Default" let:args>
	<Input {...args} />
</Story>

<Story name="Disabled" let:args>
	<Input disabled value="This is disbaled!" {...args} />
</Story>

<Story name="Placeholder" let:args>
	<Input placeholder="This is placeholder..." {...args} />
</Story>

<Story name="Readonly" let:args>
	<Input readonly value="This is value" {...args} />
</Story>

<Story name="Size" let:args>
	<div class="container-xl">
		{#each ['sm', 'md', 'lg'] as size}
			<div class="row">
				<div class="col mb-3">
					<Input {size} value="Size: {size}" {...args} />
				</div>
			</div>
		{/each}
	</div>
</Story>

<Story name="Type" let:args>
	<Input type="password" value="This is secret value" {...args} />
</Story>
