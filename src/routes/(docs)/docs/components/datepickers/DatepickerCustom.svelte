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
<!-- Bind:value isn't working yet on range date,
	 you can use LitePicker's api to get start and end dates -->
<DatePicker options={{ singleMode: false }} />
