<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * TODO
	 */
	export let open: boolean = false

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('dialog-alert', undefined, $$props.class)

	let element: HTMLElement
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>s</div>
{/if}
