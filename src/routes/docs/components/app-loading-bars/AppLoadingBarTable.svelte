<script lang="ts">
	import { Button, Card, Table, TableBody, TableHead, TableRow } from '@ubeac/svelte/components'
	import AppLoadingBar from '@ubeac/svelte/components/AppLoadingBar/AppLoadingBar.svelte'
	import TableCell from '@ubeac/svelte/components/Table/TableCell.svelte'

	let todos: any[] = []
	let loadingBar: any

	async function fetchData() {
		loadingBar.start()
		todos = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
		loadingBar.done()
	}
</script>

<Button on:click={fetchData}>Fetch Data</Button>

<Card>
	<AppLoadingBar indeterminate bind:this={loadingBar} />
	<Table>
		<TableHead>
			<TableCell>User ID</TableCell>
			<TableCell>ID</TableCell>
			<TableCell>Title</TableCell>
			<TableCell>Completed</TableCell>
		</TableHead>
		<TableBody>
			{#each todos.splice(0, 10) as todo}
				<TableRow>
					<TableCell>{todo.userId}</TableCell>
					<TableCell>{todo.id}</TableCell>
					<TableCell>{todo.title}</TableCell>
					<TableCell>{todo.completed}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Card>
