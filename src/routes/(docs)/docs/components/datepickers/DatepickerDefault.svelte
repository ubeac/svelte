<script lang="ts">
	import { DatePicker } from '@ubeac/svelte'

	let value: Date
</script>

<DatePicker bind:value />
<i>value: {value}</i>
