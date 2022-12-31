<script lang="ts">
	import { Doc, El, Preview } from '@ubeac/svelte'

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

<Doc title="Basic usage">
	<p>
		To use Date Picker, import <code>DatePicker</code> component and bind <code>value</code> to a variable. The variable
		will be updated with the selected date.
	</p>
</Doc>
<Preview src="./DatepickerDefault.svelte">
	<div>
		<DatepickerDefault />
	</div>
</Preview>

<Doc title="Date format">
	You can change display format of the date using <code>format</code> prop. The format is based on
	<a href="https://momentjs.com/docs/#/displaying/format/">Format</a> of Moment.js.
</Doc>
<Preview src="./DatepickerFormat.svelte">
	<div>
		<DatepickerFormat />
	</div>
</Preview>

<Doc title="Initial Value">You can set initial value for <code>DatePicker</code>.</Doc>
<Preview src="./DatepickerValue.svelte">
	<div>
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
