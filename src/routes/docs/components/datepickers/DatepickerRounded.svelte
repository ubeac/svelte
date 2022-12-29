<script lang="ts">
	import { DatePicker } from '@ubeac/svelte'

	let value: Date;
</script>

<DatePicker borderRounded bind:value/>

value: <b>{value}</b>
