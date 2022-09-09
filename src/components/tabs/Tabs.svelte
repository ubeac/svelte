<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal'
	import { writable } from 'svelte/store'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Forward All native Events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let value: any

	/**
	 * TODO
	 */
	export let vertical: boolean = false

	const active = writable<any>()

	const tabs = new Set()

	$: classes = classname('tabs', { vertical }, $$props.class, true)

	function change(value: any) {
		active.set(value)
	}

	function register(value: any) {
		tabs.add(value)
	}

	function unregister(value: any) {
		tabs.delete(value)
	}

	setContext('TABS', { active, change, register, unregister })
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
