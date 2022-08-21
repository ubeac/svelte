<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { GoogleMap } from '$lib/components'

	let api_Key = 'AIzaSyBJKPIYzpZOPKyhpgvPCKeWPEAoaiQBHJ8'

	let argTypes = {
		apiKey: {
			control: 'text',
		},
		height: {
			control: {
				type: 'radio',
				options: ['sm', 'md', 'lg'],
			},
		},
	}
</script>

<Meta title="GoogleMap" component={GoogleMap} {argTypes} />

<Template let:args>
	<GoogleMap apiKey={api_Key} {...args} />
</Template>

<Story name="default" />

<Story name="apiKey" args={{ apiKey: '....' }} let:args>
	Should break
	<GoogleMap {...args} />
</Story>

<Story name="center" args={{ center: { latitude: 30, longitude: 30 } }} />
<Story name="connect" args={{ multiple: true, connect: true }} />
<Story name="draggable" args={{ draggable: true }} />
<Story name="height" args={{ height: 'sm' }} />
<Story name="multiple" args={{ multiple: true }} />
<Story name="value" args={{ value: { latitude: 30, longitude: 30 } }} />

<Story
	name="value multiple"
	args={{
		multiple: true,
		value: [
			{ latitude: 30, longitude: 30 },
			{ latitude: 31, longitude: 31 },
			{ latitude: 32, longitude: 31 },
			{ latitude: 31, longitude: 32 },
			{ latitude: 30, longitude: 31 },
		],
	}} />
