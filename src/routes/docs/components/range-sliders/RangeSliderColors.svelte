<script lang="ts">
	import { RangeSlider } from '@ubeac/svelte'
	import type { Options } from 'nouislider'

	let optionsLower: Options = {
		range: {
			min: 10,
			max: 100,
		},
		step: 1,
		start: [70],
		direction: 'ltr',
		behaviour: 'tap-drag',
		tooltips: false,
		orientation: 'horizontal',
		connect: 'lower',
	}

	let optionsUpper: Options = {
		range: {
			min: 10,
			max: 100,
		},
		step: 1,
		start: [40],
		direction: 'ltr',
		behaviour: 'tap-drag',
		tooltips: false,
		orientation: 'horizontal',
		connect: 'upper',
	}
	let value: any
</script>

<RangeSlider color="primary" bind:value options={optionsLower} />
<RangeSlider color="warning" bind:value options={optionsUpper} />
<RangeSlider color="success" bind:value options={optionsLower} />
<RangeSlider color="danger" bind:value options={optionsUpper} />
<RangeSlider color="purple" bind:value options={optionsLower} />
<RangeSlider color="azure" bind:value options={optionsUpper} />
