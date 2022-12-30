<script>
	import { TabList, TabItem, TabContent, TabPane, Tabs, El, Menu } from '@ubeac/svelte/components'
</script>

<Tabs>
	<TabList>
		<TabItem active>Active</TabItem>
		<TabItem>
			<El>Dropdown</El>
			<Menu>
				<li class="dropdown-item">Item 1</li>
				<li class="dropdown-item">Item 2</li>
				<li class="dropdown-item">Item 3</li>
				<li class="dropdown-item">Item 4</li>
			</Menu>
		</TabItem>
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
