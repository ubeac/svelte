<script>
	import { FormHint, FormDatePicker } from '@ubeac/svelte'
</script>

<FormDatePicker label="Start from:">
	<FormHint slot="message">choose a day from next week.</FormHint>
</FormDatePicker>

<FormDatePicker type="Until:" label="invalid:" value="2020/05/01">
	<FormHint state="invalid" slot="message">this date should not be greater than today.</FormHint>
</FormDatePicker>

<FormDatePicker type="email" label="valid:" value={new Date()}>
	<FormHint state="valid" slot="message">This field is valid.</FormHint>
</FormDatePicker>
