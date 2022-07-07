<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import type { Modal } from 'bootstrap'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition, requestAnimationFrame } from '$lib/utils'

	/**
	 * TODO
	 */
	export let open: boolean = false

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('dialog', { size }, `fade ${$$props.class || ''}`)

	let element: HTMLElement
	let instance: Modal

	$: if (open === true) requestAnimationFrame(() => instance?.show())
	$: if (open !== true) requestAnimationFrame(() => instance?.hide())

	function hide() {
		open = false
	}

	function show() {
		open = true
	}

	function bind() {
		if (!element) return
		if (typeof window == 'undefined') return
		import('bootstrap').then(({ Modal }) => {
			element.addEventListener('shown.bs.modal', show)
			element.addEventListener('hidden.bs.modal', hide)
			instance = new Modal(element, {
				backdrop: 'static',
				keyboard: true,
			})
		})
	}

	function unbind() {
		if (!element) return
		if (!instance) return
		instance.dispose()
		element.removeEventListener('shown.bs.modal', show)
		element.removeEventListener('hidden.bs.modal', hide)
	}

	onMount(bind)

	onDestroy(unbind)
</script>

{#if condition($$props)}
	<div use:forwardEvents {...$$restProps} class={classes}>
		<div class={classname('dialog-container')}>
			<slot />
		</div>
	</div>
{/if}
