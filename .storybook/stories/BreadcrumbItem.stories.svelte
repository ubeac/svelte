<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Breadcrumb, BreadcrumbItem } from '$lib/components'
</script>

<Meta
	title="BreadcrumbItem"
	component={BreadcrumbItem}
	argTypes={{
		href: {
			control: 'text',
		},
	}} />

<Template let:args>
	<Breadcrumb>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/test">test</BreadcrumbItem>
		<BreadcrumbItem {...args}>link</BreadcrumbItem>
	</Breadcrumb>
</Template>

<Story name="default" />
<Story name="active" args={{ active: true }} />
<Story name="href" args={{ href: '/some/path' }} />
