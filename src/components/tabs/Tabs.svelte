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

	const active = writable<any>(value)

	$: active.set(value)

	$: classes = classname('tabs', { vertical }, $$props.class, true)

	function change(next: any) {
		value = next
	}

	function update(next: any, prev: any) {
		if (typeof prev == 'undefined') return
		if ($active !== prev) return
		change(next)
	}

	setContext('TABS', { active, change, update })
</script>

<div use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
