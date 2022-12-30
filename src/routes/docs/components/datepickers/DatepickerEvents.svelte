<script lang="ts">
	import { DatePicker } from '@ubeac/svelte'

	let value: Date
	let changed: Date

	function onChange({ detail }: CustomEvent) {
		changed = detail
	}
</script>

<DatePicker bind:value on:changed={onChange} />
<i>value: {value}, changed: {changed}</i>
