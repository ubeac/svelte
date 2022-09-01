<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { Label } from '$lib/components'
	import { forwardEventsBuilder } from '$lib/directives'
	import type { Colors } from '$lib/types'
	import { classname, condition } from '$lib/utils'

	/**
	 * Color of Switch
	 */
	export let color: Colors = 'default'
	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())
	/**
	 * Label of Switch
	 */
	export let label: string | undefined = undefined
	/**
	 * Value of Switch
	 */
	export let value: boolean | undefined = undefined

	$: switchClasses = classname('switch', undefined, $$props.class)
	$: inputClasses = classname('switch-input', { color }, $$props.class)
	$: labelClasses = classname('switch-label', undefined, $$props.class)
</script>

{#if condition($$props)}
	<Label class={switchClasses}>
		<input type="checkbox" bind:checked={value} use:forwardEvents {...$$restProps} class={inputClasses} />
		<span class={labelClasses}>
			{#if label}
				{label}
			{:else}
				<slot />
			{/if}
		</span>
	</Label>
{/if}
