<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Id of Accordion group
	 */
	export let id: string = 'accordions-' + nanoid()

	/**
	 * Let more than one Accordion be open in same time
	 */
	export let stayOpen: boolean = false

	const context = writable<string | undefined>()
	setContext('ACCORDIONS:GROUP', context)

	$: $context = stayOpen ? undefined : '#' + id

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('accordions', {}, $$props.class)
</script>

<div {id} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
