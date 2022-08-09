<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { APP_CONTENTS, APP_FOOTERS, APP_HEADERS, APP_STICKIES, App } from '$lib/components'
</script>

<Meta
	title="App"
	component={App}
	argTypes={{
		content: {
			control: {
				type: 'select',
				options: APP_CONTENTS,
			},
		},
		footer: {
			control: {
				type: 'select',
				options: APP_FOOTERS,
			},
		},
		header: {
			control: {
				type: 'select',
				options: APP_HEADERS,
			},
		},
		sticky: {
			control: {
				type: 'select',
				options: APP_STICKIES,
			},
		},
	}} />

<Story name="Default" let:args>
	<App class="example-app" {...args}>
		<div class="box" slot="header">Header</div>
		<div class="box">Content</div>
		<div class="box" slot="footer">Footer</div>
	</App>
</Story>

<Story name="Division" let:args>
	<App class="example-app" {...args}>
		<div class="box" slot="header-start">Header Start</div>
		<div class="box" slot="header">Header</div>
		<div class="box" slot="header-end">Header End</div>
		<div class="box" slot="aside-start">Aside Start</div>
		<div class="box">Content</div>
		<div class="box" slot="aside-end">Aside End</div>
		<div class="box" slot="footer-start">Footer Start</div>
		<div class="box" slot="footer">Footer</div>
		<div class="box" slot="footer-end">Footer End</div>
	</App>
</Story>

<Story name="Header" let:args>
	<App class="example-app" {...args}>
		<div class="box" slot="header-start">Header Start</div>
		<div class="box" slot="header">Header</div>
		<div class="box" slot="header-end">Header End</div>
	</App>
</Story>

<Story name="Contemt" let:args>
	<App class="example-app" {...args}>
		<div class="box">Content</div>
	</App>
</Story>

<Story name="Footer" let:args>
	<App class="example-app" {...args}>
		<div class="box" slot="footer-start">Footer Start</div>
		<div class="box" slot="footer">Footer</div>
		<div class="box" slot="footer-end">Footer End</div>
	</App>
</Story>

<Story name="Sticky" let:args>
	<App class="example-app" sticky={['header']} {...args}>
		<div class="box" slot="header">Header</div>
		<div class="box long">Content</div>
	</App>
</Story>

<Story name="Login" let:args>
	<App class="example-app" content="center" {...args}>
		<div class="box" slot="header">Header</div>
		<div class="box">Content</div>
	</App>
</Story>

<Story name="Dashboard" let:args>
	<App class="example-app" footer="end" {...args}>
		<div class="box" slot="header">Header</div>
		<div class="box" slot="aside-start">Aside Start</div>
		<div class="box">Content</div>
		<div class="box" slot="footer">Footer</div>
	</App>
</Story>
