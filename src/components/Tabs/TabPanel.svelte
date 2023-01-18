<script lang="ts">
	import { getContext } from 'svelte'

	import { El, type TabPanelProps, type TabsContext } from '$lib/index.js'

	import { TABS } from './Tabs.svelte'

	type $$Props = TabPanelProps

	//#region Props

	/**
	 * The prefix of the component CSS class
	 * @default tab-pane
	 * @type string
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tab-pane'

	/**
	 * The role of the tab pane
	 * @default tabpanel
	 * @type string
	 */
	export let role: $$Props['role'] = 'tabpanel'

	//#endregion

	const panel = {}
	const { registerPanel, selectedPanel } = getContext<TabsContext>(TABS)
	registerPanel(panel)

	$: props = {
		cssPrefix,
		role,
	}
</script>

{#if $selectedPanel === panel}
	<El {...$$restProps} {...props}>
		<slot />
	</El>
{/if}
