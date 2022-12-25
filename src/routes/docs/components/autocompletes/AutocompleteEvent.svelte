<script>
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	let fromEvent = undefined

	function onChange(event) {
		fromEvent = event.detail
	}
</script>

<Autocomplete on:change={onChange} {items} bind:value />

<p if={!!fromEvent}>
	Event: {JSON.stringify(fromEvent)}
</p>
