<script lang="ts">
	import { El } from '../Base'
	import { CardHeader } from '../Card'
	import TabItem from './TabItem.svelte'
	import Tabs from './Tabs.svelte'
  import type { CardTabsProps } from './Tabs.types'

    type $$Props = CardTabsProps;
</script>

<Tabs {...$$restProps}>
	<svelte:fragment slot="header" let:tabs>
		<CardHeader>
			{#if tabs.length > 0}
				<El cssPrefix="tabs-items" cssProps={{card: true}}>
					{#each tabs as tab, index}
						<TabItem {index} {tab} />
					{/each}
				</El>
			{/if}
		</CardHeader>
	</svelte:fragment>

	<slot />
</Tabs>
