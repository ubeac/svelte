<script lang="ts">
	import { getContext } from 'svelte'

	import { El } from '../Base'
	import { Icon } from '../Icon'
	import type { TabItemProps, TabsContext, TabType } from './Tabs.types'

	type $$Props = TabItemProps

	export let cssPrefix: $$Props['cssPrefix'] = 'tab-item'
	export let tag: $$Props['tag'] = 'li'

	export let tab: $$Props['tab'] = undefined
	export let index: $$Props['index'] = 0

	const { selected }: TabsContext = getContext('TABS')

	function onClick(e: any) {
		e.preventDefault()
		if (tab!.disabled) return
		$selected = index!

		console.log('click', tab)
	}

	$: active = $selected === index

	$: cssProps = {
		disabled: tab?.disabled,
		active,
	}

	$: otherProps = {
		'href': '#',
		'cssPrefix': cssPrefix + '-inner',
		'aria-current': active ? 'page' : null,
		'tabindex': tab!.disabled ? '-1' : null,
	}
</script>

{#if tab}
	<El {tag} {cssPrefix}>
		<El on:click={onClick} tag="a" {...otherProps} {cssProps}>
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
