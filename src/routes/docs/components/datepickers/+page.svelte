<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import DatepickerCustom from './DatepickerCustom.svelte'

	import DatepickerDefault from './DatepickerDefault.svelte'
	import DatepickerFormat from './DatepickerFormat.svelte'
  import DatepickerRange from './DatepickerRange.svelte'
	import DatepickerValue from './DatepickerValue.svelte'
</script>

<h1>Date Pickers</h1>
<p>Date Picker is a fully featured date selection component that lets users select a date.</p>

<Doc title="Default">
	<!--  -->
</Doc>
<Preview src="./DatepickerDefault.svelte">
	<div class=".example-datepicker">
		<DatepickerDefault />
	</div>
</Preview>

<Doc title="Date Format">
	You can change display <a href="https://momentjs.com/docs/#/displaying/format/">Format</a> of the date.
</Doc>
<Preview src="./DatepickerFormat.svelte">
	<div class=".example-datepicker">
		<DatepickerFormat />
	</div>
</Preview>

<Doc title="Initial Value">You can set initial value for DatePicker.</Doc>
<Preview src="./DatepickerValue.svelte">
	<div class=".example-datepicker">
		<DatepickerValue />
	</div>
</Preview>

<Doc title="Range">
	<!--  -->
</Doc>
<Preview src="./DatepickerRange.svelte">
	<div class=".example-datepicker">
		<DatepickerRange />
	</div>
</Preview>

<Doc title="Custom Options"
	>DatePicker component internally uses <a href="https://litepicker.com/docs/options">LitePicker</a>. which you can pass
	options to Litepicker instance using <code>options</code> prop.</Doc>
<Preview src="./DatepickerCustom.svelte">
	<div class=".example-datepicker">
		<DatepickerCustom />
	</div>
</Preview>

<style>
	.example-datepicker {
		display: flex;
	}
</style>
