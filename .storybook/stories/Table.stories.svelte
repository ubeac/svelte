<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Table, TableBody, TableCell, TableHead, TableRow } from '$lib/components'
</script>

<Meta
	title="Data Tables/Table"
	argTypes={{
		size: {
			defaultValue: 'auto',
			control: {
				type: 'select',
				default: 'md',
				options: ['sm', 'md'],
			},
		},
	}}
	component={Table} />

<Template let:args>
	<Table {...args}>
		<TableHead>
			<TableRow>
				<TableCell>First</TableCell>
				<TableCell>Second</TableCell>
				<TableCell>Third</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{#each Array.from({ length: 5 }) as _, index}
				<TableRow>
					<TableCell>First: {index}</TableCell>
					<TableCell
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam explicabo saepe, at atque natus consequuntur
						deleniti perferendis officia
					</TableCell>
					<TableCell>odio est nihil vitae officiis ab, sint a, illo architecto pariatur voluptas.</TableCell>
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
<Story name="size-sm" args={{ size: 'sm' }} />
