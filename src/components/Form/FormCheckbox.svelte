<script lang="ts">
	import { type FormCheckboxProps, FormField } from '.'
	import { Checkbox } from '../Checkbox'

	type $$Props = FormCheckboxProps

	export let color: $$Props['color'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-checkbox'
	export let inline: $$Props['inline'] = undefined
	export let description: $$Props['description'] = undefined
	export let value: $$Props['value'] = undefined

	$: checkboxProps = {
		color,
		inline,
		description,
	}
</script>

<FormField {...$$restProps} {cssPrefix}>
	<slot name="label" />
	<Checkbox {...checkboxProps} bind:value>
		<slot />
	</Checkbox>
	<slot name="hint" />
</FormField>
