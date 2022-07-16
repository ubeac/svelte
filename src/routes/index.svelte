<script lang="ts">
	import { Button, GoogleAutocomplete, GoogleMap } from '$lib/components'
	import type { Coordinate } from '$lib/types'

	let autocompleteValue: any
	let value: Coordinate

	// $: {
	// 	value = {
	// 		lat: autocompleteValue?.address_components?.[0].geometry?.location.lat,
	// 		lng: autocompleteValue?.address_components?.[0].geometry?.location.lng,
	// 	}
	// }
</script>

<Button>Some Button</Button>
<GoogleAutocomplete bind:value={autocompleteValue} />
<pre>AUTOCOMPLETE: {JSON.stringify(autocompleteValue, null, 2)}</pre>

<br /><br />
<GoogleMap bind:value />
<pre>MAP: {JSON.stringify(value, null, 2)}</pre>
