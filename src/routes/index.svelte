<script lang="ts">
	import { Tab, Tabs } from '$lib/components'
	import TabHeader from '$lib/components/tab/TabHeader.svelte'
</script>

<Tabs let:tabs>
	<TabHeader {tabs} />
	<Tab name="p-1">Hello Page 1</Tab>
	<Tab active name="p-2">Hello Page 2</Tab>
	<Tab disabled name="p-3">Hello Page 3</Tab>
</Tabs>
