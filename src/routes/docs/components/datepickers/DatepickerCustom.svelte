<script>
	import { DatePicker } from '@ubeac/svelte'

	let rangeValue = ''

	$: console.log(rangeValue)
</script>

<small>Highlight days</small>
<DatePicker options={{ highlightedDays: [['2022/12/01', '2022/12/08']] }} />

<small>Number of months</small>
<DatePicker options={{ numberOfMonths: 2 }} />

<small>pick ranges</small>
<DatePicker options={{ singleMode: false }} bind:value={rangeValue} />
