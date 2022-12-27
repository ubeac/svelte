<script lang="ts">
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined

	let fromEvent: any = undefined

	function onChanged(event: any) {
		fromEvent = event.detail
	}
</script>

<Autocomplete on:changed={onChanged} {items} bind:value />

<i>
	Event: {JSON.stringify(fromEvent)}
</i>
