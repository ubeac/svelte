<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Table, TableBody, TableCell, TableHead, TableRow } from '$lib/components'
</script>

<Meta
	title="Components/Table"
	component={Table}
	argTypes={{
		border: {
			control: {
				type: 'boolean',
			},
		},
		wrap: {
			control: {
				type: 'boolean',
			},
		},
		hover: {
			control: {
				type: 'boolean',
			},
		},
		striped: {
			control: {
				type: 'boolean',
			},
		},
	}} />

<Template let:args>
	<Table {...args}>
		<TableHead>
			<TableRow>
				<TableCell>First</TableCell>
				<TableCell>Second</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{#each Array.from({ length: 5 }) as _, index}
				<TableRow>
					<TableCell>First: {index}</TableCell>
					<TableCell>Second: {index}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Template>

<Story name="default" />
<Story name="border" args={{ border: true }} />
<Story name="hover" args={{ hover: true }} />
<Story name="striped" args={{ striped: true }} />
<Story name="wrap" args={{ wrap: true }} />
