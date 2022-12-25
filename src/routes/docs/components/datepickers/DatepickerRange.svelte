<script lang="ts">
	import { DatePicker } from '@ubeac/svelte'

	let from: Date
	let to: Date

	let value: Date[]

	$: {
		from = value?.[0]
		to = value?.[1]
	}
</script>

<DatePicker range bind:value />

<br />
value: {value}
<br />
from: {from}
<br />
to: {to}
