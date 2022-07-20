<script lang="ts">
	import { Button, FormCheckbox, FormInput, GoogleAutocomplete, GoogleMap } from '$lib/components'
	import type { Coordinate } from '$lib/types'

	let autocompleteValue: any
	let value: Coordinate

	let center: Coordinate = {
		latitude: 38,
		longitude: 59,
	}
	let apiKey = ''
	let draggable = false
	let connect = false
	let multiple = false
	let readonly = false
	let zoom = 8

	// $: {
	// 	value = {
	// 		lat: autocompleteValue?.address_components?.[0].geometry?.location.lat,
	// 		lng: autocompleteValue?.address_components?.[0].geometry?.location.lng,
	// 	}
	// }
</script>

<Button on:click={() => (apiKey = 'IzaSyBJKPIYzpZOPKyhpgvPCKeWPEAoaiQBHJ8')}>Set ApiKey for second map</Button>
<GoogleAutocomplete bind:value={autocompleteValue} />
<pre>AUTOCOMPLETE: {JSON.stringify(autocompleteValue, null, 2)}</pre>

<FormCheckbox label="draggable" bind:value={draggable} />
<FormCheckbox label="connect" bind:value={connect} />
<FormCheckbox label="multiple" bind:value={multiple} />
<FormCheckbox label="readonly" bind:value={readonly} />
<FormInput type="number" bind:value={zoom} />

<br /><br />
<GoogleMap
	apiKey="AIzaSyBJKPIYzpZOPKyhpgvPCKeWPEAoaiQBHJ8"
	on:changed={console.log}
	bind:value
	bind:center
	{draggable}
	{connect}
	{multiple}
	{readonly}
	zoom={8} />
<GoogleMap
	{apiKey}
	on:changed={console.log}
	bind:value
	bind:center
	{draggable}
	{connect}
	{multiple}
	{readonly}
	bind:zoom />
<pre>MAP: {JSON.stringify(value, null, 2)}</pre>
