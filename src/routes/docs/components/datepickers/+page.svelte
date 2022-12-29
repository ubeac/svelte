<script>
	import { Doc, Preview } from '@ubeac/svelte'
	import DatepickerCustom from './DatepickerCustom.svelte'
	import DatepickerDefault from './DatepickerDefault.svelte'
	import DatepickerDisabled from './DatepickerDisabled.svelte'
	import DatepickerEvents from './DatepickerEvents.svelte'
	import DatepickerFlush from './DatepickerFlush.svelte'
	import DatepickerFormat from './DatepickerFormat.svelte'
	import DatepickerRounded from './DatepickerRounded.svelte'
	import DatepickerSizes from './DatepickerSizes.svelte'
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

<Doc title="Border rounded">
	<!--  -->
</Doc>
<Preview src="./DatepickerRounded.svelte">
	<DatepickerRounded />
</Preview>

<Doc title="No border">
	<!--  -->
</Doc>
<Preview src="./DatepickerFlush.svelte">
	<DatepickerFlush />
</Preview>

<Doc title="Sizes">
	<!--  -->
</Doc>
<Preview src="./DatepickerSizes.svelte">
	<DatepickerSizes />
</Preview>

<Doc title="Disabled">
	<!--  -->
</Doc>
<Preview src="./DatepickerDisabled.svelte">
	<DatepickerDisabled />
</Preview>

<Doc title="Events">
	<!--  -->
</Doc>
<Preview src="./DatepickerEvents.svelte">
	<DatepickerEvents />
</Preview>

<Doc title="Custom Options">
	DatePicker component internally uses <a href="https://litepicker.com/docs/options">LitePicker</a>. which you can pass
	options to Litepicker instance using <code>options</code> prop.
</Doc>
<Preview src="./DatepickerCustom.svelte">
	<div class=".example-datepicker">
		<DatepickerCustom />
	</div>
</Preview>
