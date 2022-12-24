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
	 * set the RangeSlider options
	 */
	export let options: $$Props['options']

	let cssProps: any = {}
	let otherProps: any = {}

	$: {
		cssProps = {
			color,
			orientation: options?.orientation ?? 'horizontal',
		}
		otherProps = { cssPrefix }
		if (element !== undefined && options !== undefined) {
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
