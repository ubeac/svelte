<script lang="ts">
	import { Tabs, TabsItem, TabsItems, TabsPanel, TabsPanels } from '$lib/components/tabs'

	let value = '1'

	let v = '3'
</script>

<button on:click={() => (value = '5')}>change</button>
<Tabs value="3">
	<TabsItems>
		<TabsItem {value}>Button 1</TabsItem>
		<TabsItem value="2">Button 2</TabsItem>
		<TabsItem value="3">Button 3</TabsItem>
	</TabsItems>
	<TabsPanels>
		<TabsPanel {value}>Panel 1</TabsPanel>
		<TabsPanel value="2">Panel 2</TabsPanel>
		<TabsPanel value="3">Panel 3</TabsPanel>
	</TabsPanels>
</Tabs>
