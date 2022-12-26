<script lang="ts">
	import { FormField, type FormRangeSliderProps, RangeSlider } from '$lib/components'

	type $$Props = FormRangeSliderProps

	export let cssPrefix: $$Props['cssPrefix'] = 'form-range-slider'
	export let inline: $$Props['inline'] = undefined
	export let description: $$Props['description'] = undefined
	export let value: $$Props['value'] = undefined

	/**
	 * the color of RangeSlider
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * the start value(s) of RangeSlider
	 */
	export let startValue: $$Props['startValue']

	/**
	 * the value of step for RangeSlider
	 */
	export let step: $$Props['step'] = undefined

	/**
	 * the orientation of RangeSlider
	 */
	export let orientation: $$Props['orientation'] = undefined

	/**
	 * the mode of RangeSlider
	 */
	export let mode: $$Props['mode'] = undefined

	/**
	 * the minimum value of RangeSlider
	 */
	export let min: $$Props['min'] = 0

	/**
	 * the maximum value of RangeSlider
	 */
	export let max: $$Props['max'] = 10

	/**
	 * show the RangeSlider to rtl
	 */
	export let direction: $$Props['direction'] = undefined

	/**
	 * show RangeSlider tooltip
	 */
	export let tooltips: $$Props['tooltips'] = undefined

	/**
	 * set connect value of RangeSlider
	 */
	export let connect: $$Props['connect'] = undefined

	/**
	 * set connect value of RangeSlider
	 */
	export let behaviour: $$Props['behaviour'] = undefined

	$: rangeSliderProps = {
		color,
		inline,
		description,
		max,
		min,
		mode,
		orientation,
		step,
		startValue,
		direction,
		tooltips,
		connect,
		behaviour,
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<RangeSlider {...rangeSliderProps} bind:value />
	<slot name="hint" />
</FormField>
