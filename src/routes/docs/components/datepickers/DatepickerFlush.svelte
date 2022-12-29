<script lang="ts">
	import { DatePicker } from '@ubeac/svelte'

	let value: Date;
</script>

<DatePicker borderFlush bind:value/>

value: <b>{value}</b>
