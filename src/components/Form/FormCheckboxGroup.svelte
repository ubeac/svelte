<script lang="ts">
	import { type FormCheckboxGroupProps, FormField } from '.'
	import { CheckboxGroup } from '../Checkbox'

	type $$Props = FormCheckboxGroupProps

	export let color: $$Props['color'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-checkbox-group'
	export let inline: $$Props['inline'] = undefined
	export let items: $$Props['items'] = undefined
	export let value: $$Props['value'] = undefined

	$: checkboxGroupProps = {
		color,
		inline,
		items,
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<CheckboxGroup {...checkboxGroupProps} bind:value let:item let:index>
		<slot {index} {item}>{item}</slot>
	</CheckboxGroup>
	<slot name="hint" />
</FormField>
