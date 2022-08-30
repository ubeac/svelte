<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Breadcrumb, BreadcrumbItem } from '$lib/components'
</script>

<Meta
	title="Breadcrumb"
	component={Breadcrumb}
	argTypes={{
		separator: {
			control: {
				type: 'radio',
				options: ['dots', 'arrows', 'bullets', 'default'],
			},
		},
	}} />

<Template let:args>
	<Breadcrumb {...args}>
		<BreadcrumbItem href="/">Home</BreadcrumbItem>
		<BreadcrumbItem href="/test">test</BreadcrumbItem>
		<BreadcrumbItem active href="/test/link">link</BreadcrumbItem>
	</Breadcrumb>
</Template>

<Story name="default" />
<Story name="separator:arrows" args={{ separator: 'arrows' }} />
<Story name="separator:bullets" args={{ separator: 'bullets' }} />
<Story name="separator:default" args={{ separator: 'default' }} />
<Story name="separator:dots" args={{ separator: 'dots' }} />
