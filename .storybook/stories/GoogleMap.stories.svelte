<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { GoogleMap } from '$lib/components'

	let apiKey = 'AIzaSyBJKPIYzpZOPKyhpgvPCKeWPEAoaiQBHJ8'
</script>

<Meta
	title="GoogleMap"
	component={GoogleMap}
	argTypes={{
		apiKey: {
			control: 'text',
		},
		height: {
			control: {
				type: 'radio',
				options: ['sm', 'md', 'lg'],
			},
		},
	}} />

<Template let:args>
	<GoogleMap {apiKey} {...args} />
</Template>

<Story name="default" />
