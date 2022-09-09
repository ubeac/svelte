<script lang="ts">
	import { Alert, Button, Card } from '$lib/components'

	let show: boolean = false
	let count: number = 0
	let showAlert: boolean = false

	function toggle() {
		show = !show
	}
</script>

<Button on:click={() => (showAlert = !showAlert)}>Toggle Alert</Button>
<Button on:click={toggle}>Toggle</Button>
<h1 if={2 + 2 == 4}>Hello World!</h1>
<h1 if={2 + 2 == 4}>
	<div if={show}>
		click button

		<Button on:click={() => (count = count + 1)}>count {count}</Button>
		<Card if={count > 'abc'.length}>
			it Wroks (reset button will appear if count > 5)
			<Button if={count > 5} on:click={() => (count = 0)}>Reset</Button>
		</Card>

		test
	</div>
	Hello World!
</h1>
<h1 if={2 + 2 == 4}>Hello World!</h1>

<Alert if={showAlert}>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ratione quo modi rerum quod quaerat voluptatibus vero
	consequuntur provident, minus similique neque id! Atque necessitatibus ex vero, tenetur quibusdam officia?
</Alert>
