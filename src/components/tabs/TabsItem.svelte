<script lang="ts">
	import { get_current_component, getContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * TODO
	 */
	export let disabled: boolean = false

	/**
	 * Forward All native Events.
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let value: any

	const { active, change, update } = getContext('TABS')

	let prev: any

	$: classes = classname('tabs-item', { active: $active === value, disabled }, $$props.class, true)

	$: (() => {
		update(value, prev)
		prev = value
	})()

	function onClick(event: MouseEvent) {
		if (disabled) return
		event.preventDefault()
		change(value)
	}

	function onKeyDown(event: KeyboardEvent) {
		if (disabled) return
		if (event.key != ' ' && event.key != 'Enter') return
		event.preventDefault()
		change(value)
	}
</script>

<button use:forwardEvents {...$$restProps} class={classes} on:click={onClick} on:keydown={onKeyDown}>
	<slot />
</button>
