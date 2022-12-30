<script>
	import { TabList, TabItem, TabContent, TabPane, Tabs } from '@ubeac/svelte/components'
</script>

<Tabs>
	<TabList grow>
		<TabItem active>Active</TabItem>
		<TabItem>Link</TabItem>
		<TabItem>Link</TabItem>
		<TabItem disabled>Disabled</TabItem>
	</TabList>
	<TabContent>
		<TabPane>Content of Active</TabPane>
		<TabPane>Content of Link 1</TabPane>
		<TabPane>Content of Link 2</TabPane>
		<TabPane>Content of Disabled</TabPane>
	</TabContent>
</Tabs>
