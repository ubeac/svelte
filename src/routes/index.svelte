<script lang="ts">
	import { Avatar, Badge, Tab, TabContent, TabHeader, Tabs } from '$lib/components'
	import Button from '$lib/components/button/Button.svelte'
	import Icon from '$lib/components/icon/Icon.svelte'

	let tabs = []
	let stayOpen = false

	let TextareaModel = ''
	let selectMultipleModel: any[] = ['1']
	let selectModel = 'apple'
	let radiobuttonModel = 'banana'
	let switchModel = true
	let singleCheckboxModel = true
	let multiCheckboxModel: any[] = []
	let items = [
		{ label: 'apple', value: 'apple', disabled: true },
		{ label: 'banana', value: 'banana' },
		{ label: 'orange', value: 'orange' },
		{ label: 'plum', value: 'plum' },
	]
</script>

<Button>Text</Button>
<br />
<Button>
	Text
	<Icon slot="end" name="package" />
</Button>
<br />
<Button>
	<Icon slot="start" name="package" />
	Text
</Button>
<br />
<Button>
	<Icon slot="start" name="package" />
	Text
	<Badge slot="end">New</Badge>
</Button>
<br />
<Button>
	Text
	<Badge slot="end">New</Badge>
</Button>
<br />
<Button>
	<Badge slot="start">New</Badge>
	Text
</Button>
<br />
<Button>
	<Avatar slot="start">AV</Avatar>
	Text
</Button>
<br />
<Button>
	Text
	<Avatar slot="end">AV</Avatar>
</Button>
<br />
<Button>
	<Avatar>AV</Avatar>
</Button>
<br />
<Button>
	<Badge>New</Badge>
</Button>
<br />

<Button>
	<Icon name="user" />
</Button>

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
