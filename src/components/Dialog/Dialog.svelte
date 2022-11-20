<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal'

	import { forwardEventsBuilder } from '@ubeac/svelte/directives'
	import { classname } from '@ubeac/svelte/utils'

	import type { DialogPlacements, DialogSizes } from './Dialog.types'
  import { browser } from '$app/environment'

	const forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * Make page's color Dimmer
	 */
	export let backdrop: boolean = true

	/**
	 * set position relative to it's parent (instead of entire screen)
	 */
	export let absolute: boolean = false

	/**
	 * Controls open/close state of Dialog
	 */
	export let open: boolean = false

	/**
	 * Do not close dialog if user clicked outside of Dialog Component
	 */
	export let persistent: boolean = false

	/**
	 * Set position of Dialog
	 */
	export let placement: DialogPlacements = 'top'

	/**
	 * Makes dialog's body scrollable
	 */
	export let scrollable: boolean = false

	/**
	 * Changes width of Dialog
	 */
	export let size: DialogSizes = 'md'

	function hide(force = false) {
		if (!force && persistent) return
		open = false
	}

	setContext('DIALOG', { hide })

	$: if(browser) {
		if(open) {
		document.body.classList.add(classname('body-dialog-open') ?? '');
	} else {
		if(document.body.classList.contains(classname('body-dialog-open') ?? '')) {
			document.body.classList.remove(classname('body-dialog-open') ?? '')
		}
	}
}

	$: classes = classname('dialog', { placement, scrollable, size, open, absolute }, $$props.class, true)
</script>

<div on:click={() => hide()} use:forwardEvents {...$$restProps} class={classes}>
	<div class={classname('dialog-container')}>
		<slot />
	</div>
</div>

{#if backdrop}
	<div class={classname('dialog-backdrop', { open, absolute })} />
{/if}
