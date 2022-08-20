<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Spinner, SPINNER_SIZES, SPINNER_STYLES } from '$lib/components'
</script>

<Meta
	title="Spinner"
	component={Spinner}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		size: {
			defaultValue: 'sm',
			control: {
				type: 'select',
				options: SPINNER_SIZES,
			},
		},
		style: {
			defaultValue: 'border',
			control: {
				type: 'radio',
				options: SPINNER_STYLES,
			},
		},
	}} />

<Story name="Default" let:args>
	<Spinner {...args} />
</Story>

<Story name="Color" let:args>
	<div class="example-spinners">
		{#each COLORS as color}
			<Spinner {color} {...args} />
		{/each}
	</div>
</Story>

<Story name="Size" let:args>
	<div class="example-spinners">
		{#each SPINNER_SIZES as size}
			<Spinner {...args} {size} />
		{/each}
	</div>
</Story>

<Story name="Style" let:args>
	<div class="example-spinners">
		{#each SPINNER_STYLES as style}
			<Spinner {...args} {style} />
		{/each}
	</div>
</Story>
