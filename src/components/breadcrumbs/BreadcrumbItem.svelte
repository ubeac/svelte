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
	export let href: 'string' | undefined = undefined

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
