<script lang="ts">
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import { El } from '../Base'
	import { Icon } from '../Icon'
	import TabItem from './TabItem.svelte'
	import type { TabsContext, TabsProps, TabType } from './Tabs.types'

	type $$Props = TabsProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tabs'
	export let tag: $$Props['tag'] = 'div'
	export let pills: $$Props['pills'] = undefined
	export let fill: $$Props['fill'] = undefined
	export let activeIndex: $$Props['activeIndex'] = 0

	let tabs: TabType[] = []

	const selected = writable(activeIndex)

	function register(id: string, tab: Partial<TabType>) {
		console.log('register', id, tab)
		tabs = [...tabs, { ...tab, id }]
		return tabs.length - 1
	}

	function unregister(id: string) {
		tabs = tabs.filter((tab) => tab.id !== id)
	}

	setContext<TabsContext>('TABS', {
		register,
		unregister,
		selected,
	})

	$: cssProps = {
		pills,
		fill,
	}
</script>

<El {...$$restProps} {tag} {cssPrefix} {cssProps}>
	<slot name="header" {tabs}>
		{#if tabs.length > 0}
			<El cssPrefix="{cssPrefix}-items">
				{#each tabs as tab, index}
					<TabItem {index} {tab} />
				{/each}
			</El>
		{/if}
	</slot>
	<El cssPrefix="{cssPrefix}-content">
		<slot />
	</El>
</El>
