<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let active: boolean = false

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * TODO
	 */
	export let href: string | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('menu-item', { active, disabled }, $$props.class)
</script>

{#if condition($$props)}
	<svelte:element this={href ? 'a' : 'li'} use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</svelte:element>
{/if}
