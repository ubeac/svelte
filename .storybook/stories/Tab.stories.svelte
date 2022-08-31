<script>
	import { Card, Tab, TabContent, TabHeader, Tabs, TAB_SHAPES } from '$lib'
	import { Story, Meta } from '@storybook/addon-svelte-csf'
</script>

<Meta
	title="Containers/Tab"
	component={Tabs}
	argTypes={{
		shape: {
			control: {
				type: 'radio',
				options: TAB_SHAPES,
			},
		},
	}} />

<Story name="Default" let:args>
	<Card class="example-tab">
		<Tabs let:tabs {...args}>
			<TabHeader {tabs} />
			<TabContent>
				<Tab name="Home">
					This is <b>Home</b> tab
				</Tab>
				<Tab name="Profile">
					This is <b>Profile</b> tab
				</Tab>
			</TabContent>
		</Tabs>
	</Card>
</Story>

<Story name="Tabs With Icon" let:args>
	<Card class="example-tab">
		<Tabs let:tabs {...args}>
			<TabHeader {tabs} />
			<TabContent>
				<Tab name="Home" icon="home">
					This is <b>Home</b> tab
				</Tab>
				<Tab name="Profile" icon="user">
					This is <b>Profile</b> tab
				</Tab>
				<Tab icon="settings" />
			</TabContent>
		</Tabs>
	</Card>
</Story>

<Story name="Active Index" let:args>
	<Card class="example-tab">
		<Tabs activeIndex={2} let:tabs {...args}>
			<TabHeader {tabs} />
			<TabContent>
				<Tab name="Home" icon="home">
					This is <b>Home</b> tab
				</Tab>
				<Tab name="Profile" icon="user">
					This is <b>Profile</b> tab
				</Tab>
				<Tab icon="settings">
					This is <b>Settings</b> tab
				</Tab>
			</TabContent>
		</Tabs>
	</Card>
</Story>

<Story name="Pill Tabs" let:args>
	<Card class="example-tab">
		<Tabs shape="pills" let:tabs {...args}>
			<TabHeader {tabs} />
			<TabContent>
				<Tab name="Home" icon="home">
					This is <b>Home</b> tab
				</Tab>
				<Tab name="Profile" icon="user">
					This is <b>Profile</b> tab
				</Tab>
				<Tab icon="settings">
					This is <b>Settings</b> tab
				</Tab>
			</TabContent>
		</Tabs>
	</Card>
</Story>

<Story name="Vertical Tabs" let:args>
	<Card class="example-tab">
		<Tabs vertical let:tabs {...args}>
			<TabHeader {tabs} />
			<TabContent>
				<Tab name="Home" icon="home">
					This is <b>Home</b> tab
				</Tab>
				<Tab name="Profile" icon="user">
					This is <b>Profile</b> tab
				</Tab>
				<Tab icon="settings">
					This is <b>Settings</b> tab
				</Tab>
			</TabContent>
		</Tabs>
	</Card>
</Story>
