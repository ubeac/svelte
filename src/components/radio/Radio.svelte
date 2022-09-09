<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname } from '$lib/utils'

	/**
	 * Radio checked status
	 */
	export let checked: boolean | undefined = undefined

	/**
	 * Radio color
	 */
	export let color: Colors = 'default'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Radio label
	 */
	export let label: string | undefined = undefined

	/**
	 * Radio name
	 */
	export let name: string | undefined = undefined

	/**
	 * Radio value
	 */
	export let value: any = false

	$: radioClasses = classname('radio', { checked }, $$props.class, true)
	$: inputClasses = classname('radio-input', { color }, $$props.class, true)
	$: labelClasses = classname('radio-label', undefined, $$props.class, true)
</script>

<label class={radioClasses}>
	<input {checked} type="radio" {label} {name} {value} use:forwardEvents {...$$restProps} class={inputClasses} />
	<span class={labelClasses}>
		{#if label}
			{label}
		{:else}
			<slot />
		{/if}
	</span>
</label>
