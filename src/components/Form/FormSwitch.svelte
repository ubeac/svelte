<script lang="ts">
	import { FormField, type FormSwitchProps, Switch } from '$lib/components'

	type $$Props = FormSwitchProps

	//#region Props
	export let label: $$Props['label'] = undefined
	export let hint: $$Props['hint'] = undefined
	export let state: $$Props['state'] = undefined
	export let required: $$Props['required'] = undefined
	export let cssPrefix: $$Props['cssPrefix'] = 'form-switch'

	export let color: $$Props['color'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let description: $$Props['description'] = undefined
	export let reverse: $$Props['reverse'] = undefined
	export let value: $$Props['value'] = undefined
	export let checked: $$Props['checked'] = undefined
	export let inline: $$Props['inline'] = undefined
	//#endregion

	$: props = {
		required,
		label,
		hint,
		state,
		cssPrefix,
	}

	$: switchProps = {
		color,
		inline,
		description,
		reverse,
		checked,
		disabled,
	}
</script>

<FormField {...props} {...$$restProps}>
	<slot name="label" />
	<Switch {...switchProps} bind:checked bind:value on:change>
		<slot />
	</Switch>
	<slot name="hint" />
</FormField>
