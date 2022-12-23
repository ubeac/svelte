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
	 * set the RangeSlider orientation
	 */
	export let orientation: $$Props['orientation'] = 'horizontal'

	/**
	 * set the RangeSlider options
	 */
	export let options: $$Props['options']

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			color,
			orientation,
		}
		otherProps = {
			cssPrefix,
			options,
			value,
		}
	}

	let element: HTMLElement
	onMount(() => {
		if (element !== undefined) {
			noUiSlider.create(element, options)

			element.noUiSlider.on('update', function (values: any, handle: any) {
				value = values
			})
		}
	})
</script>

<El {...$$restProps} {cssProps} {...otherProps} bind:value bind:element />
