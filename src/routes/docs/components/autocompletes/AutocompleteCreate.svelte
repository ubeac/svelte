<script>
	import { Autocomplete } from '@ubeac/svelte'

	let newItem = ''
	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''

	function onCreate({ detail }) {
		newItem = detail
	}
</script>

<Autocomplete create {items} on:create={onCreate} bind:value />
{#if !!value}
	<p>You created new item <b>{newItem}</b></p>
{/if}
