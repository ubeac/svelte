<script lang="ts">
	import { El, FormRangeSlider } from '@ubeac/svelte'
	import type { Options } from 'nouislider'

	let value1: any
	let value2: any

	let format = {
		to: function (val: any) {
			return parseInt(val)
		},
		from: function (val: any) {
			return parseInt(val)
		},
	}

	let options1: Options = {
		range: {
			min: 10,
			max: 100,
		},
		step: 10,
		start: [40],
		direction: 'ltr',
		behaviour: 'tap-drag',
		tooltips: true,
		format: format,
	}

	let options2: Options = {
		range: {
			min: 10,
			max: 100,
		},
		start: [20, 70],
		step: 1,
		direction: 'ltr',
		behaviour: 'tap-drag',
		connect: true,
		format: format,
	}
</script>

<FormRangeSlider color="primary" bind:value={value1} options={options1} label="Zoom(X)" />
<El>Value: {value1}</El>

<FormRangeSlider options={options2} bind:value={value2} label="Distance Range" />
<El>Values: {value2}</El>
