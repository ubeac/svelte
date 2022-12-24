<script lang="ts">
	import { FormField, type FormRangeSliderProps, RangeSlider } from '$lib/components'

	type $$Props = FormRangeSliderProps

	export let color: $$Props['color'] = undefined
	export let options: $$Props['options']
	export let cssPrefix: $$Props['cssPrefix'] = 'form-range-slider'
	export let inline: $$Props['inline'] = undefined
	export let description: $$Props['description'] = undefined
	export let value: $$Props['value'] = undefined

	$: rangeSliderProps = {
		color,
		inline,
		description,
		options,
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<RangeSlider {...rangeSliderProps} bind:value />
	<slot name="hint" />
</FormField>
