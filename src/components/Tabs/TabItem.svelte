<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '../Base'
	import { Icon } from '../Icon'
	import type { TabItemProps, TabsContext, TabType } from './Tabs.types'

	type $$Props = TabItemProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-item'
	export let tag: $$Props['tag'] = 'li'

	export let tab: TabType | undefined = undefined
	export let index: number

	const { selected }: TabsContext = getContext('TABS')

	function onClick(e: any) {
		e.preventDefault()
		if (tab!.disabled) return
		$selected = index

		console.log('click', tab)
	}

	$: cssProps = {
		disabled: tab?.disabled,
		active: $selected === index,
	}
</script>

{#if tab}
	<El {tag} {cssPrefix}>
		<El on:click={onClick} href="#" tag="a" cssPrefix="{cssPrefix}-inner" {cssProps}>
			{#if tab.icon}
				<Icon name={tab.icon} />
			{/if}
			{#if tab.title}
				{tab.title}
			{/if}
			{#if tab.iconEnd}
				<Icon name={tab.iconEnd} />
			{/if}
		</El>
	</El>
{/if}
