<script>
	import { Card, Tabs, CardBody, TabList, TabContent, TabPane, TabItem, CardHeader } from '@ubeac/svelte/components'
</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList card>
				<TabItem active>Active</TabItem>
				<TabItem>Link</TabItem>
				<TabItem>Link</TabItem>
				<TabItem disabled>Disabled</TabItem>
			</TabList>
		</CardHeader>
		<CardBody>
			<TabContent>
				<TabPane>Content of Active</TabPane>
				<TabPane>Content of Link 1</TabPane>
				<TabPane>Content of Link 2</TabPane>
				<TabPane>Content of Disabled</TabPane>
			</TabContent>
		</CardBody>
	</Tabs>
</Card>
