<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import { nanoid } from 'nanoid'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	/**
	 * Disable this tab
	 */
	export let disabled: boolean = false

	/**
	 * Sets Icon of Tab
	 */
	export let icon: string | undefined = undefined

	/**
	 * Id of Tab Pane
	 */
	export let id = 'tab-' + nanoid()

	/**
	 * Name or title of Tab
	 */
	export let name: string | undefined = undefined

	const forwardEvents = forwardEventsBuilder(get_current_component())

	const { register, unregister, active } = getContext('TABS')

	onMount(() => {
		register(id, { name, icon, disabled })
	})

	onDestroy(() => {
		unregister(id)
	})

	$: classes = classname('tab', {}, [$$props.class, 'fade', 'show', $active === id ? 'active' : ''])
</script>

<div {id} use:forwardEvents {...$$restProps} class={classes}>
	<slot />
</div>
