<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { get_current_component } from 'svelte/internal'

	import type { Modal } from 'bootstrap'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname, condition, requestAnimationFrame } from '$lib/utils'

	/**
	 * TODO
	 */
	export let backdrop: boolean = true

	/**
	 * TODO
	 */
	export let open: boolean = false

	/**
	 * TODO
	 */
	export let persistent: boolean = false

	/**
	 * TODO
	 */
	export let scrollable: boolean = false

	/**
	 * TODO
	 */
	export let size: 'sm' | 'md' | 'lg' = 'md'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('dialog', { scrollable, size }, `fade ${$$props.class || ''}`)

	let element: HTMLElement
	let instance: Modal

	$: if (open !== true) requestAnimationFrame(() => instance?.hide())
	$: if (open === true) requestAnimationFrame(() => instance?.show())

	function hide() {
		open = false
	}

	function show() {
		open = true
	}

	function bind() {
		import('bootstrap').then(({ Modal }) => {
			element.addEventListener('hidden.bs.modal', hide)
			element.addEventListener('shown.bs.modal', show)
			instance = new Modal(element, {
				backdrop: backdrop ? (persistent ? 'static' : true) : false,
				keyboard: true,
			})
		})
	}

	function unbind() {
		element?.removeEventListener('hidden.bs.modal', hide)
		element?.removeEventListener('shown.bs.modal', show)
		instance?.dispose()
	}

	onMount(bind)

	onDestroy(unbind)
</script>

{#if condition($$props)}
	<div bind:this={element} use:forwardEvents {...$$restProps} class={classes}>
		<!-- TODO: remove .modal-dialog -->
		<div class={classname('dialog-container', undefined, 'modal-dialog')}>
			<slot />
		</div>
	</div>
{/if}
