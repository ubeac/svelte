<script lang="ts">
	import { El } from '../Base'
	import type { InputProps } from './Input.types'

	type $$Props = InputProps

	export let cssPrefix: $$Props['cssPrefix'] = 'input'

	export let tag: $$Props['tag'] = 'input'

	/**
	 * Set the input disabled
	 */
	export let disabled: $$Props['disabled'] = undefined

	/**
	 * Set placeholder for the input
	 */
	export let placeholder: $$Props['placeholder'] = undefined

	/**
	 * Set the input read only
	 */
	export let readOnly: $$Props['readOnly'] = undefined

	/**
	 * Set the size of input
	 */
	export let size: $$Props['size'] = 'md'

	/**
	 * the text Value of input
	 */
	export let value: $$Props['value'] = undefined

	$: cssProps = {
		readOnly,
		size,
		disabled,
	}

	$: otherProps = {
		tag,
		cssPrefix,
		placeholder,
	}
</script>

<El bind:value {...$$restProps} {...otherProps} {cssProps} />
