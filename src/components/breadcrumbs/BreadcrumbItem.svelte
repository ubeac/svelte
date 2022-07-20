<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Mark this as an active Breadcrumb item
	 */
	export let active: boolean = false

	/**
	 * Set the Href of component
	 */
	export let href: string | undefined = undefined

	const forwardEevnts = forwardEventsBuilder(get_current_component())

	$: classes = classname('breadcrumb-item', { active }, $$props.class)
</script>

{#if condition($$props)}
	<li use:forwardEevnts {...$$restProps} class={classes}>
		<a {href}>
			<slot />
		</a>
	</li>
{/if}
