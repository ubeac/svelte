<script>
	import { Card, Tab, TabBody, Tabs } from '../components'
</script>

<a href="/docs">Documentation website</a>
<br />
<a href="https://svelte.ubeac.io/storybook">Storybook</a>

<Card>
	<Tabs fill activeIndex={-1}>
		<Tab title="Tab 1" disabled icon="user">
			<TabBody>
				1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptates ratione necessitatibus id saepe
				quae impedit nisi quos harum excepturi, voluptate amet facilis maxime totam doloremque exercitationem. Facilis,
				amet optio?
			</TabBody>
		</Tab>
		<Tab title="Tab 1.5">
			<TabBody>
				1.5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptates ratione necessitatibus id
				saepe quae impedit nisi quos harum excepturi, voluptate amet facilis maxime totam doloremque exercitationem.
				Facilis, amet optio?
			</TabBody>
		</Tab>
		<Tab title="Tab 2">
			<TabBody>
				2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam voluptates ratione necessitatibus id saepe
				quae impedit nisi quos harum excepturi, voluptate amet facilis maxime totam doloremque exercitationem. Facilis,
				amet optio?
			</TabBody>
		</Tab>
	</Tabs>
</Card>
