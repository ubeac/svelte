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
<button class="btn">Tabler</button>
<br />
<Button>
	Text
	<Icon name="package" />
</Button>
<button class="btn">
	Tabler
	<Icon name="package" class="icon-right" />
</button>

<br />
<Button>
	<Icon name="package" />
	Text
</Button>
<button class="btn">
	<Icon name="package" class="icon-right" />
	Tabler
</button>
<br />
<Button>
	<Icon name="package" />
	Text
	<Badge>New</Badge>
</Button>
<button class="btn">
	<Icon name="package" class="icon" />
	Tabler
	<span class="badge ms-2">new</span>
</button>

<br />
<Button>
	Text
	<Badge>New</Badge>
</Button>
<button class="btn">
	Tabler
	<span class="badge ms-2">new</span>
</button>

<br />
<Button>
	<Badge>New</Badge>
	Text
</Button>
<button class="btn">
	<span class="badge ms-2">new</span>
	Tabler
</button>

<br />
<Button>
	<Avatar>AV</Avatar>
	Text
</Button>
<button class="btn">
	<Avatar>AV</Avatar>
	Tabler
</button>

<br />
<Button>
	Text
	<Avatar>AV</Avatar>
</Button>
<div>No tabler equivalent</div>
<br />
<Button>
	<Avatar>AV</Avatar>
</Button>
<button class="btn">
	<Avatar>AV</Avatar>
</button>
<br />
<Button>
	<Badge>New</Badge>
</Button>
<button class="btn">
	<span class="badge">New</span>
</button>
<br />

<Button>
	<Icon name="user" />
</Button>
<button class="btn">
	<Icon class="icon" name="user" />
</button>

<br />
<br />
<br />
<br />
<Button size="lg">
	<Icon name="user" />
	Large Button
</Button>
<button class="btn btn-lg">
	<Icon class="icon" name="user" />
	Tabler Button
</button>

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
