<script lang="ts">
	import type { FormFieldProps } from '$lib/components'

	import El from '../El/El.svelte'
	import Label from '../Label/Label.svelte'

	type $$Props = FormFieldProps

	/**
	 * Set Css Prefix for the FormField
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'form-field'

	/**
	 * Define label for the FormField
	 */
	export let label: $$Props['label'] = undefined

	/**
	 * Define hint for the FormField
	 */
	export let hint: $$Props['hint'] = undefined

	/**
	 * Set the FormField required
	 */
	export let required: $$Props['required'] = undefined

	/**
	 * Set the size of FormField
	 */
	export let state: $$Props['state'] = undefined

	$: cssProps = {}
	$: otherProps = { cssPrefix }
	$: labelCssProps = { required }
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot name="label">
		{#if label}
			<Label cssProps={{ labelCssProps }} {...labelCssProps}>{label}</Label>
		{/if}
	</slot>
	<slot />
	<slot name="hint">
		{#if hint}
			<El cssPrefix={cssPrefix + '-hint'} cssProps={{ state }}>
				{hint}
			</El>
		{/if}
	</slot>
</El>
