<script lang="ts">
	import { onMount } from 'svelte'

	import noUiSlider from 'nouislider'

	import { El, type RangeSliderProps, type RangeSliderTarget } from '$lib/components'

	type $$Props = RangeSliderProps

	/**
	 * Set Css Prefix for the RangeSlider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'range-slider'

	/**
	 * Target DOM element for RangeSlider
	 */
	export let element: $$Props['element'] = undefined

	/**
	 * the Value of RangeSlider
	 */
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

	let cssProps: any = {}
	let otherProps: any = {}
	let options: any = {
		range: {
			min: typeof min !== 'number' ? parseInt(min?.toString()) : min,
			max: typeof max !== 'number' ? parseInt(max?.toString()) : max,
		},
		connect: connect,
		orientation: orientation ?? 'horizontal',
		direction: direction ?? 'ltr',
		start: startValue?.split(','),
		tooltips: tooltips ?? false,
		step: step !== undefined ? (typeof step !== 'number' ? parseInt(step?.toString()) : step) : undefined,
		mode: mode,
		behaviour: behaviour?.map((element) => element).join('-'),
	}

	$: {
		cssProps = {
			color,
			orientation: orientation ?? 'horizontal',
		}
		otherProps = { cssPrefix, options }
		if (element !== undefined) {
			element.noUiSlider?.updateOptions(options, true)
		}
	}

	onMount(() => {
		if (element !== undefined && options !== undefined) {
			noUiSlider.create(element, options)

			element.noUiSlider?.on('update', (values: any, handle: any) => {
				value = values
			})
		}
		return () => {
			if (element !== undefined) {
				element.noUiSlider?.destroy()
			}
		}
	})
</script>

<El {...$$restProps} {cssProps} {...otherProps} bind:value bind:element />
