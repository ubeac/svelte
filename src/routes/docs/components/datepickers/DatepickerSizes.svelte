<script lang="ts">
	import { El, DatePicker } from '@ubeac/svelte'

	let value1: Date
	let value2: Date
	let value3: Date
</script>

<DatePicker size="sm" bind:value={value1} />
<El mb=3>sm value: <b>{value1}</b></El>

<DatePicker size="md" bind:value={value2} />
<El mb=3>md value: <b>{value2}</b></El>

<DatePicker size="lg" bind:value={value2} />
<El mb=3>lg value: <b>{value2}</b></El>
