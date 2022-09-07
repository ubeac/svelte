<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import { get_current_component, getContext } from 'svelte/internal'

	import type { Tab } from 'bootstrap'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import { Icon } from '../icon'
	import type { TabType } from './tab.types'

	/**
	 * Forward All native Events
	 */
	export let forwardEvents = forwardEventsBuilder(get_current_component())

	/**
	 * TODO
	 */
	export let tab: TabType | undefined = undefined

	let element: HTMLButtonElement

	let instance: Tab

	onMount(() => {
		import('bootstrap').then(({ Tab }) => {
			console.log(element)
			instance = new Tab(element)
			console.log({ instance })
		})
	})

	onDestroy(() => {
		instance?.dispose()
	})

	function show() {
		instance?.show()
	}

	$: if (instance) {
		if (tab?.active) instance.show()
	}

	$: classes = classname('tab-item', {}, $$props.class)
</script>

<li use:forwardEvents {...$$restProps} class={classes}>
	<button
		bind:this={element}
		on:click={show}
		data-bs-target="#{tab.id}"
		class={classname('tab-item-link', null, { active: tab.active, disabled: tab.disabled })}>
		{#if tab.icon}
			<div class={classname('tab-item-icon')}>
				<Icon name={tab.icon} />
			</div>
		{/if}
		{#if tab.name}
			{tab.name}
		{/if}
	</button>
</li>
