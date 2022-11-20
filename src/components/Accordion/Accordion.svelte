<script lang="ts">
	import { get_current_component, getContext, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

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

	const acccordions = getContext<any>('ACCORDIONS')

	acccordions.update((item: any) => {
		item.children.push(context)
		return item
	})

	$: classes = classname('accordion-item', undefined, $$props.class)

	$: context.set({ id, open })
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
