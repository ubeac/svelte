<script lang="ts">
	import { FormField, RadioGroup } from '$lib/components'
	import type { FormRadioGroupProps, RadioGroupProps } from '$lib/components'

	type $$Props = FormRadioGroupProps

	export let color: $$Props['color'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-radio-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined

	let radioGroupProps: RadioGroupProps = {}
	$: {
		radioGroupProps = {
			color,
			inline,
			reverse,
			items,
		}
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<RadioGroup {...radioGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</RadioGroup>
	<slot name="hint" />
</FormField>
