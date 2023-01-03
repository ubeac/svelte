<script lang="ts">
	import { Autocomplete } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined

	let fromEvent: any = undefined

	function onChange(event: any) {
		fromEvent = event.detail
	}
</script>

<Autocomplete on:change={onChange} {items} bind:value />

<i>
	Event: {JSON.stringify(fromEvent)}
</i>
