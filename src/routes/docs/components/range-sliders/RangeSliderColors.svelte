<script lang="ts">
	import { RangeSlider, type RangeSliderOptions } from '@ubeac/svelte'

	let optionsLower: RangeSliderOptions = {
		range: {
			min: 10,
			max: 100,
		},
		step: 1,
		start: [70],
		direction: 'ltr',
		behaviour: 'tap-drag',
		tooltips: false,
		connect: 'lower',
	}

	let optionsUpper: RangeSliderOptions = {
		range: {
			min: 10,
			max: 100,
		},
		step: 1,
		start: [40],
		direction: 'ltr',
		behaviour: 'tap-drag',
		tooltips: false,
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
