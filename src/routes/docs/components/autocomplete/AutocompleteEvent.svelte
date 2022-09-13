<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	let fromEvent = undefined

	function onChanged(event) {
		fromEvent = event.detail
	}
</script>

<Autocomplete on:changed={onChanged} {items} bind:value />

<p if={!!fromEvent}>
	Event: {JSON.stringify(fromEvent)}
</p>
