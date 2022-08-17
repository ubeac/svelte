<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition } from '$lib/utils'

	/**
	 * Id of Accordion
	 */
	export let id: string = nanoid()

	/**
	 * Controls open/close state of Accordion Item
	 */
	export let open: boolean = false

	const context = writable({ id, open })

	const forwardEvents = forwardEventsBuilder(get_current_component())

	setContext('ACCORDION', context)

	$: classes = classname('accordion', undefined, $$props.class)

	$: context.set({ id, open })
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<slot />
	</div>
{/if}
