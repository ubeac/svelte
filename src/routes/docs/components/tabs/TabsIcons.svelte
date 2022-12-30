<script>
	import { TabList, Icon, TabItem, TabContent, TabPane, Tabs } from '@ubeac/svelte'
</script>

<Tabs>
	<TabList>
		<TabItem active>
			<Icon name="user" />
			Active
		</TabItem>
		<TabItem>
			<Icon name="star" />
			Link
		</TabItem>
		<TabItem>
			Link
			<Icon name="star" />
		</TabItem>
		<TabItem>
			<Icon name="cog" />
		</TabItem>
	</TabList>
	<TabContent>
		<TabPane>Content of Active</TabPane>
		<TabPane>Content of Link 1</TabPane>
		<TabPane>Content of Link 2</TabPane>
		<TabPane>Content of Settings</TabPane>
	</TabContent>
</Tabs>
