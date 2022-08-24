<script lang="ts">
	import { get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import type { TabType } from './tab.types'
	import TabItem from './TabItem.svelte'

	/**
	 * List of Tab items
	 */
	export let tabs: Array<TabType> = []

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: classes = classname('tab-header', {}, [$$props.class, 'nav'])
</script>

<ul use:forwardEvents {...$$restProps} class={classes}>
	{#each tabs as tab}
		<TabItem {tab} />
	{/each}
</ul>
