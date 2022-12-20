<script>
	import { Tab, Tabs } from '@ubeac/svelte/components'
</script>

<Tabs>
	<Tab icon="user" title="Icon Active" active>Content of icon active</Tab>
	<Tab icon="user" title="With Icon">Content of with icon</Tab>
	<Tab iconEnd="user" title="Icon End">Content of icon end</Tab>
	<Tab ms="auto" icon="home">Icon Only</Tab>
</Tabs>
