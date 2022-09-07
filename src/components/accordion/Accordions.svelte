<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Id of Accordion group
	 */
	export let group: string = nanoid()

	/**
	 * Let more than one Accordion be open in same time
	 */
	export let persistent: boolean = false

	const context = writable({ group, persistent })

	const forwardEvents = forwardEventsBuilder(get_current_component())

	setContext('ACCORDIONS', context)

	$: classes = classname('accordion', undefined, $$props.class)

	$: context.set({ group, persistent })
</script>

<div id={group} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
