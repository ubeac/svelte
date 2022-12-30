<script lang="ts">
	import { DatePicker } from '@ubeac/svelte'

	let value: Date
</script>

<DatePicker disabled bind:value />

value: <b>{value}</b>
