<script>
	import { DatePicker, El } from '@ubeac/svelte'
	let value1 = new Date()
	let value2 = new Date()
	let value3 = new Date()
</script>

<DatePicker bind:value={value1} format="yyyy/MM/DD" />
<El fontWeight="bold">value: <b>{value1}</b></El>
<El mb="3" fontWeight="light" fontSize="3">format: yyyy/MM/DD</El>

<DatePicker bind:value={value2} format="Do [of] MMMM" />
<El fontWeight="bold">value: <b>{value2}</b></El>
<El mb="3" fontWeight="light" fontSize="3">format: Do [of] MMMM</El>

<DatePicker bind:value={value3} format="D MMM YYYY" />
<El fontWeight="bold">value: <b>{value3}</b></El>
<El mb="3" fontWeight="light" fontSize="3">format: D MMM YYYY</El>
