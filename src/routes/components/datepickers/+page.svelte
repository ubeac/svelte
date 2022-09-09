<script>
	import { Preview } from '@ubeac/svelte/components'

	import DatepickerDefault from './DatepickerDefault.svelte'
	import DatepickerFormat from './DatepickerFormat.svelte'
	import DatepickerValue from './DatepickerValue.svelte'
</script>

<h1>Date Pickers</h1>
<p>You can collect Date type from users using DatePicker</p>

<Preview src="./DatepickerDefault.svelte">
	<div class=".example-datepicker">
		<DatepickerDefault />
	</div>
</Preview>

<h2>Date Format</h2>
<p>You can change <a href="https://momentjs.com/docs/#/displaying/format/">Format</a> of the date</p>

<Preview src="./DatepickerFormat.svelte">
	<div class=".example-datepicker">
		<DatepickerFormat />
	</div>
</Preview>

<h2>Initial Value</h2>
<p>You can set initial value for DatePicker</p>

<Preview src="./DatepickerValue.svelte">
	<div class=".example-datepicker">
		<DatepickerValue />
	</div>
</Preview>

<style>
	.example-datepicker {
		display: flex;
	}

	h2 {
		margin-top: 2rem;
	}
</style>
