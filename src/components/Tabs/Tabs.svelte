<script context="module">
	export const TABS = {}
</script>

<script lang="ts">
	import { onDestroy, setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import type { TabsContext, TabsProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = TabsProps

	//#region  Props

	/**
	 * The prefix of the component CSS class
	 * @default tabs
	 * @type string
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tabs'

	/**
	 * Whether the tabs are vertical
	 * @default undefined
	 * @type boolean
	 */
	export let vertical: $$Props['vertical'] = undefined

	//#endregion

	const tabs: Array<any> = []
	const panels: Array<any> = []
	const selectedTab = writable<any | null>(null)
	const selectedPanel = writable<any | null>(null)

	setContext<TabsContext>(TABS, {
		registerTab: (tab: any) => {
			tabs.push(tab)
			selectedTab.update((current) => current || tab)

			onDestroy(() => {
				const i = tabs.indexOf(tab)
				tabs.splice(i, 1)
				selectedTab.update((current) => (current === tab ? tabs[i] || tabs[tabs.length - 1] : current))
			})
		},

		registerPanel: (panel: any) => {
			panels.push(panel)
			selectedPanel.update((current) => current || panel)

			onDestroy(() => {
				const i = panels.indexOf(panel)
				panels.splice(i, 1)
				selectedPanel.update((current) => (current === panel ? panels[i] || panels[panels.length - 1] : current))
			})
		},

		selectTab: (tab: any) => {
			const i = tabs.indexOf(tab)
			selectedTab.set(tab)
			selectedPanel.set(panels[i])
		},

		selectedTab,
		selectedPanel,
	})
</script>

<El {...$$restProps} {cssPrefix} cssProps={{ vertical }}>
	<slot />
</El>
