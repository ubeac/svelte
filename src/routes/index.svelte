<script>
	import { Card, Table, TableBody, TableFoot } from '$lib/components'
	import TableCell from '$lib/components/table/TableCell.svelte'
	import TableHead from '$lib/components/table/TableHead.svelte'
	import TableRow from '$lib/components/table/TableRow.svelte'
</script>

<div class="p-2">
	<Card outline>
		<Table on:click={() => console.log('clicked on table')} hover border wrap>
			<TableHead>
				<TableRow>
					<TableCell head>id</TableCell>
					<TableCell head>m culpa. Unde odio libero impedit illum?</TableCell>
					<TableCell head>name</TableCell>
					<TableCell head>email</TableCell>
				</TableRow>
			</TableHead>
			<TableBody
				on:click={(e) => {
					console.log('clicked on table body')
					e.stopPropagation()
				}}>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>admin</TableCell>
					<TableCell>Admin</TableCell>
					<TableCell>admin@admin.com</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>2</TableCell>
					<TableCell on:click={(e) => console.log('click on user')}>user</TableCell>
					<TableCell>User</TableCell>
					<TableCell>user@user.com</TableCell>
				</TableRow>

				<TableRow>
					<TableCell>3</TableCell>
					<TableCell>guest</TableCell>
					<TableCell>Guest</TableCell>
					<TableCell>guest@guest.com</TableCell>
				</TableRow>
			</TableBody>
			<TableFoot>
				<TableRow>
					<TableCell>ID</TableCell>
					<TableCell>Name</TableCell>
					<TableCell>Username</TableCell>
					<TableCell>Email</TableCell>
				</TableRow>
			</TableFoot>
		</Table>
	</Card>
</div>
