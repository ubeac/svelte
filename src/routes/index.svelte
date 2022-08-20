<script lang="ts">
	import { Tab, TabContent, TabHeader, Tabs } from '$lib/components'
	let tabs = []
	let stayOpen = false

	let value = ['b']
</script>

<Tabs shape="pills" vertical bind:tabs>
	<TabHeader vertical {tabs} />
	<TabContent>
		<Tab name="p-1">Hello Page 1</Tab>
		<Tab active name="p-2">Hello Page 2</Tab>
		<Tab active name="p-2s">Hello dkljdPage 2</Tab>
		<Tab active name="p-2d">Hello Page 2sdfsdklf</Tab>
		<Tab active name="p-2io">Hellosdfsadjfk Page 2</Tab>
		<Tab active name="p-2zcv">sdffHello Page 2</Tab>
		<Tab disabled name="p-3">Hello Page 3</Tab>
	</TabContent>
</Tabs>
