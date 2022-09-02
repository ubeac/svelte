<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	$: classes = classname('spacer', {}, $$props.class, true)
</script>

{#if condition($$props)}
	<svelte:element this={tag} use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</svelte:element>
{/if}
