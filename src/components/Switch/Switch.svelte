<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Checked state of Checkbox
	 */
	export let value: boolean | undefined = undefined
	export let label: string | undefined = undefined
	$: switchClasses = classname('switch', undefined, $$props.class)
	$: inputClasses = classname('switch-input', undefined, $$props.class)
	$: labelClasses = classname('switch-label', undefined, $$props.class)
	function onClick() {
		value = !value
	}
</script>

{#if condition($$props)}
	<span class={switchClasses}>
		<input type="checkbox" bind:checked={value} use:forwardEvents {...$$restProps} class={inputClasses} />
		<span on:click={onClick} class={labelClasses}>
			{#if label}
				{label}
			{:else}
				<slot />
			{/if}
		</span>
	</span>
{/if}
