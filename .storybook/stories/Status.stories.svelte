<script>
	import { Status } from '$lib/components'
	import { COLORS } from '$lib/types'
	import { Meta, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta
	title="Status"
	component={Status}
	argTypes={{
		color: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'default',
				options: COLORS,
			},
		},
	}} />

<Story name="default" let:args>
	<Status {...args}>
		<Status dot animated color={args.color} />
		{args.color}
	</Status>
	<Status {...args}>
		{args.color}
	</Status>
	<Status {...args} dot />
</Story>

<Story name="Colors" let:args>
	{#each COLORS as color}
		<Status {color}>
			{color}
		</Status>
	{/each}
</Story>

<Story name="Color dot">
	{#each COLORS as color}
		<Status {color} dot />
	{/each}
</Story>

<Story name="Color dot:animated ">
	{#each COLORS as color}
		<Status {color} dot animated />
	{/each}
</Story>
