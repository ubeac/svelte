<script>
	import { Input } from '@ubeac/svelte'
	import { Card, CardBody } from '@ubeac/svelte'

	/** @type {string} */
	let value
</script>

<Input style="width:100%" placeholder="Only shown when you enter correct answer. 2 + 2 = ?" bind:value />

<Card class="mt-3" if={+value == 4}>
	<CardBody>
		<p>Congrats! You answered correctly.</p>
	</CardBody>
</Card>
