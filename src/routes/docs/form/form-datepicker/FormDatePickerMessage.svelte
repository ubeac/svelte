<script>
	import { FormDatePicker } from '@ubeac/svelte'
</script>

<FormDatePicker
	label="Birth day"
	hint="We'll never share your birthday date with anyone else."
	placeholder="Choose a date..." />

<FormDatePicker label="Date" state="valid" hint="date is validated!" value="1985/05/02" />
<FormDatePicker label="Birth day" state="invalid" hint="date is not valid!" value="2022/12/06" />
