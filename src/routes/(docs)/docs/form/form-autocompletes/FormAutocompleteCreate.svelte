<script>
	import { FormAutocomplete } from '@ubeac/svelte'

	let newItem = ''
	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	function onCreate({ detail }) {
		newItem = detail
	}
</script>

<FormAutocomplete create {items} on:create={onCreate} bind:value />

<p if={!!value}>You created new item <b>{newItem}</b></p>
