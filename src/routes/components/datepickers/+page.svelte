<script>
	import { Preview } from '@ubeac/svelte/components'

	import DatepickerDefault from './DatepickerDefault.svelte'
	import DatepickerFormat from './DatepickerFormat.svelte'
	import DatepickerValue from './DatepickerValue.svelte'
</script>

<h1>Date Pickers</h1>
<p>Date Picker is a fully featured date selection component that lets users select a date.</p>

<Preview src="./DatepickerDefault.svelte">
	<div class=".example-datepicker">
		<DatepickerDefault />
	</div>
</Preview>

<h2>Date Format</h2>
<p>You can change display <a href="https://momentjs.com/docs/#/displaying/format/">Format</a> of the date.</p>

<Preview src="./DatepickerFormat.svelte">
	<div class=".example-datepicker">
		<DatepickerFormat />
	</div>
</Preview>

<h2>Initial Value</h2>
<p>You can set initial value for DatePicker.</p>

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
