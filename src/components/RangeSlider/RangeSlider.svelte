<script lang="ts">
	import { onMount } from 'svelte'

	import noUiSlider from 'nouislider'

	import { El } from '$lib/components'
	import type { RangeSliderProps } from '$lib/components'

	type $$Props = RangeSliderProps

	/**
	 * Set Css Prefix for the RangeSlider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'range-slider'

	/**
	 * the Value of RangeSlider
	 */
	export let value: $$Props['value'] = undefined

	/**
	 * the color of RangeSlider
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * the items of RangeSlider
	 */
	//export let items: $$Props['items'] = undefined

	/**
	 * the start value(s) of RangeSlider
	 */
	export let startValue: $$Props['startValue'] = undefined

	/**
	 * the value of step for RangeSlider
	 */
	export let step: $$Props['step'] = undefined

	/**
	 * the value formater function of RangeSlider
	 */
	export let format: $$Props['format'] = undefined

	/**
	 * the mode of RangeSlider
	 */
	export let mode: $$Props['mode'] = undefined

	/**
	 * the range (min, max) of RangeSlider
	 */
	export let range: $$Props['range'] = { min: 0, max: 100 }

	/**
	 * the pips value of RangeSlider
	 */
	export let pips: $$Props['pips'] = undefined

	/**
	 * show the RangeSlider to rtl
	 */
	export let rtl: $$Props['rtl'] = undefined

	/**
	 * show the RangeSlider to vertical
	 */
	export let orientation: $$Props['orientation'] = 'horizontal'

	/**
	 * show RangeSlider tooltip
	 */
	export let tooltips: $$Props['tooltips'] = undefined

	/**
	 * set connect value of RangeSlider
	 */
	export let connect: $$Props['connect'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			orientation,
		}
		otherProps = {
			cssPrefix,
			tooltips,
			rtl,
			pips,
			range,
			mode,
			format,
			step,
			startValue,
			value,
			connect,
		}
	}

	let element: HTMLInputElement
	onMount(() => {
		if (element !== undefined) {
			noUiSlider.create(element, {
				range: range,
				step: step ? +step : undefined,
				tooltips: tooltips,
				orientation: orientation,
				direction: rtl ? 'rtl' : 'ltr',
				pips: pips,
				format: format,
				start: startValue,
				connect: connect,
			})
		}
	})
</script>

<El {...$$restProps} {cssProps} {...otherProps} bind:value bind:element class="noUi-target noUi-txt-dir-ltr" />
