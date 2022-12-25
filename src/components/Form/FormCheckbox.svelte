<script lang="ts">
	import { Checkbox, type FormCheckboxProps, FormField } from '$lib/components'

	type $$Props = FormCheckboxProps

	//#region Props

	export let color: $$Props['color'] = undefined
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let state: $$Props['state'] = undefined
	export let inline: $$Props['inline'] = undefined
	export let description: $$Props['description'] = undefined
	export let required: $$Props['required'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined

	//#endregion

	$: props = {
		required,
		label,
		hint,
		state,
	}

	$: checkboxProps = {
		color,
		inline,
		description,
		reverse,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Checkbox {...checkboxProps} bind:value>
		<slot />
	</Checkbox>
	<slot name="hint" />
</FormField>
