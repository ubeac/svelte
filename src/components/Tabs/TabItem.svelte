<script lang="ts">
	import { getContext } from 'svelte'

	import type { TabItemProps, TabsContext } from '$lib/components'
	import El from '../El/El.svelte'

	//#endregion
	import { TABS } from './Tabs.svelte'

	type $$Props = TabItemProps

	//#region Props

	/**
	 * The prefix of the component CSS class
	 * @default tab-item
	 * @type string
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tab-item'

	/**
	 * The tag of the component
	 * @default li
	 * @type string
	 */
	export let tag: $$Props['tag'] = 'li'

	/**
	 * The id of the tab
	 * @default undefined
	 * @type string
	 */
	export let active: $$Props['active'] = undefined

	/**
	 * Whether the tab is disabled
	 * @default undefined
	 * @type boolean
	 */
	export let disabled: $$Props['disabled'] = undefined

	//#endregion

	const tab = {}
	const { registerTab, selectTab, selectedTab } = getContext<TabsContext>(TABS)

	registerTab(tab)

	$: cssProps = {
		disabled,
		active: $selectedTab === tab,
	}

	$: active ? selectTab(tab) : null
</script>

<El {...$$restProps} {cssPrefix} {tag} on:click={() => (!disabled ? selectTab(tab) : null)}>
	<El tag="button" cssPrefix="{cssPrefix}-link" {cssProps}>
		<slot />
	</El>
</El>
