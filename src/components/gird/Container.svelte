<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward all native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Removes viewport maximum-width size breakpoints
	 */
	export let fluid: boolean = false

	/**
	 * Viewport only for small device ≥576px
	 */
	export let sm: boolean = false

	/**
	 * Viewport only for medium device ≥768px
	 */
	export let md: boolean = false

	/**
	 * Viewport only for large device ≥992px
	 */
	export let lg: boolean = false

	/**
	 * Viewport only for extra large device ≥1200px
	 */
	export let xl: boolean = false

	/**
	 * Viewport only for extra extra large device ≥1400px
	 */
	export let xxl: boolean = false
	/**
	 * Specify a custom tag used on the root element.
	 */
	export let tag: string = 'div'

	$: classes = classname('container', { fluid, sm, md, lg, xl, xxl }, $$props.class, true)
</script>

<svelte:element this={tag} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</svelte:element>
