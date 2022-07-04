<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Table, TableBody, TableCell, TableHead, TableRow } from '$lib/components'

	function control(type, options, defaultValue) {
		return {
			control: {
				type,
				options,
			},
			defaultValue,
		}
	}
</script>

<Meta
	title="Table"
	component={Table}
	argTypes={{
		itemCount: control('number', null, 5),
		border: control('boolean'),
		wrap: control('boolean'),
		hover: control('boolean'),
		striped: control('boolean'),
	}} />

<Template let:args>
	<Table {...args}>
		<TableHead>
			<TableRow>
				<TableCell>first</TableCell>
				<TableCell>second</TableCell>
			</TableRow>
		</TableHead>
		<TableBody>
			{#each Array.from({ length: args.itemCount }) as _, index}
				<TableRow>
					<TableCell>first: {index}</TableCell>
					<TableCell>second: {index}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Template>

<Story name="default" />
<Story name="border" args={{ border: true }} />
<Story name="wrap" args={{ wrap: true }} />
<Story name="hover" args={{ hover: true }} />
<Story name="striped" args={{ striped: true }} />
<Story name="more Items" args={{ itemCount: 10 }} />
