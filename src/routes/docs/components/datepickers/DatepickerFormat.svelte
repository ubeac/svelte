<script>
	import { DatePicker } from '@ubeac/svelte'
</script>

<DatePicker value={new Date()} format="yyyy/MM/DD" />
<DatePicker value={new Date()} format="Do [of] MMMM" />
<DatePicker value={new Date()} format="D MMM YYYY" />
