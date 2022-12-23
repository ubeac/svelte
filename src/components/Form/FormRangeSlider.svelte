<script lang="ts">
	import { RangeSlider } from '$lib/components'

	import { FormField, type FormRangeSliderProps } from '.'

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
	<RangeSlider {...rangeSliderProps} bind:value {options}>
		<slot />
	</RangeSlider>
	<slot name="hint" />
</FormField>
