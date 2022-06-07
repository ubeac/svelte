<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Alert, Button, Icon } from '@app/components'

	const TYPES = ['danger', 'info', 'success', 'warning', undefined]
	const VARIANTS = ['outlined', 'filled', undefined]
</script>

<Meta
	title="Alert"
	component={Alert}
	argTypes={{
		type: {
			control: {
				type: 'radio',
				options: TYPES,
			},
		},
		variant: {
			control: {
				type: 'radio',
				options: VARIANTS,
			},
		},
	}} />

<Template let:args>
	<Alert {...args}>
		<Alert.Title>Alert Title</Alert.Title>
		This is Alert's content
	</Alert>
</Template>

<Story name="default" />
<Story name="actions">
	<Alert>
		<Alert.Title>Title</Alert.Title>
		<p>This is Alert's content</p>
		<div slot="actions">
			<Button color="green">Ok</Button>
			<Button>Cancel</Button>
		</div>
	</Alert>
</Story>
<Story name="dismissible" args={{ dismissible: true }} />
<Story name="duration" args={{ duration: 2000 }} />
<Story name="icon" args={{ icon: 'moon' }} />
<Story name="icon slot" let:args>
	<Alert {...args}>
		<Icon slot="icon" pack="mdi" name="brightness" />
		<Alert.Title>Alert Title</Alert.Title>
		This is Alert's content
	</Alert>
</Story>
<Story name="open" args={{ open: true }} />
<Story name="type" let:args>
	{#each TYPES as type}
		<Alert {...args} {type}>Alert {type}</Alert>
	{/each}
</Story>
<Story name="variant" let:args>
	{#each VARIANTS as variant}
		<Alert {...args} {variant}>Alert {variant}</Alert>
	{/each}
</Story>
