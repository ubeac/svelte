<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '$lib/types'
	import { Alert, AlertTitle, Button, Icon, ALERT_VARIANTS, Grid, GridItem } from '$lib/components'
</script>

<Meta
	title="Alert"
	component={Alert}
	argTypes={{
		type: {
			defaultValue: 'default',
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		variant: {
			defaultValue: 'default',
			control: {
				type: 'radio',
				options: ALERT_VARIANTS,
			},
		},
	}} />

<Template let:args>
	<Alert {...args}>
		<AlertTitle>Alert Title</AlertTitle>
		This is Alert's content
	</Alert>
</Template>

<Story name="default" />
<Story name="actions" let:args>
	<Alert {...args}>
		<AlertTitle>Title</AlertTitle>
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
		<Icon slot="icon" name="brightness" />
		<AlertTitle>Alert Title</AlertTitle>
		This is Alert's content
	</Alert>
</Story>
<Story name="open" args={{ open: true }} />
<Story name="type" let:args>
	{#each COLORS as type}
		<Alert {...args} {type}>
			<AlertTitle>Title</AlertTitle>
			Alert {type}
		</Alert>
	{/each}
</Story>

<Story name="type + filled" let:args>
	{#each COLORS as type}
		<Alert variant="filled" {...args} {type}>
			Alert {type}
		</Alert>
	{/each}
</Story>

<Story name="variant" let:args>
	{#each ALERT_VARIANTS as variant}
		<Alert {...args} {variant}>Alert {variant}</Alert>
	{/each}
</Story>
