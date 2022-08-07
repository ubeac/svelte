<script lang="ts">
	import { onMount } from 'svelte'
	import { element, get_current_component } from 'svelte/internal'

	import { forwardEventsBuilder } from '$lib/directives'
	import { classname } from '$lib/utils'

	import TabItem from './TabItem.svelte'

	/**
	 * TODO
	 */
	export let tabs: any = []

	const forwardEvents = forwardEventsBuilder(get_current_component())

	$: console.log({ tabs })

	$: classes = classname('tab-header', {}, { class: $$props.class, nav: true })
</script>

<ul use:forwardEvents {...$$restProps} class={classes}>
	{#each tabs as tab}
		<TabItem {tab} />
	{/each}
</ul>
