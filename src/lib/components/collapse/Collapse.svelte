<script lang="ts">
	import { Collapse } from 'bootstrap';
	import clsx from 'clsx';
	import { createEventDispatcher, getContext, onDestroy, onMount } from 'svelte';

	/**
	 * TODO
	 */
	export let id: string = undefined;

	/**
	 * TODO
	 /// use context
	 */
	export let accordion: boolean = false;

	/**
	 * TODO
	 */
	export let navbar: boolean = getContext('nav') ?? false;

	/**
	 * TODO
	 */
	export let open: boolean = false;

	/**
	 * TODO
	 */
	export let parent: string = undefined;

	let element: HTMLDivElement;
	let instance: Collapse;

	const dispatch = createEventDispatcher();

	function onShow(e) {
		dispatch('change', true);
	}

	function onHide(e) {
		dispatch('change', false);
	}

	onMount(() => {
		element.addEventListener('show.bs.collapse', onShow);
		element.addEventListener('hide.bs.collapse', onHide);

		instance = new Collapse(element, {
			toggle: false
		});
	});

	onDestroy(() => {
		element.removeEventListener('show.bs.collapse', onShow);
		element.removeEventListener('hide.bs.collapse', onHide);

		instance.dispose();
	});

	$: if (instance)
		if (open) {
			instance.show();
		} else {
			instance.hide();
		}

	$: classes = clsx('u-collapse', 'collapse', {
		'navbar-collapse': navbar,
		'accordion-collapse': accordion
	});
</script>

<div
	id="collapse-{id}"
	bind:this={element}
	class={classes}
	data-bs-parent={parent ? `#${parent}` : null}
	aria-labelledby="#collapse-{id}-toggler"
>
	<slot />
</div>
