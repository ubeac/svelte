<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'
	import type { Colors } from '$lib/types';
	import {Label} from "$lib/components"

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Checked state of Checkbox
	 */
	export let value: boolean | undefined = undefined
	export let label: string | undefined = undefined
	export let color: Colors  = 'default'

	$: switchClasses = classname('switch', undefined, $$props.class)
	$: inputClasses = classname('switch-input', {color}, $$props.class)
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
