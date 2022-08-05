<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Alert, AlertTitle, ALERT_VARIANTS, Button, Icon } from '$lib/components'
	import { COLORS } from '$lib/types'

</script>

<Meta
	title="Alert"
	component={Alert}
	argTypes={{
		type: {
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		variant: {
			control: {
				type: 'radio',
				options: ALERT_VARIANTS,
			},
		},
	}} 
/>


<Story name="default" let:args>
	<Alert {...args}>
		<AlertTitle>Alert Title</AlertTitle>
		This is Alert's content
	</Alert>
</Story>

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

<Story name="dismissible" args={{ dismissible: true }} let:args>
	<Alert dismissible {...args}>
		<AlertTitle>Title</AlertTitle>
		<p>This is Alert's content</p>
	</Alert>
</Story>

<Story name="duration" args={{ duration: 2000 }} let:args>
	<Alert duration={2000} {...args}>
		<AlertTitle>Title</AlertTitle>
		<p>This is Alert's content</p>
	</Alert>
</Story>

<Story name="icon" args={{ icon: 'moon' }} let:args>
	<Alert dismissible {...args}>
		<AlertTitle>Title</AlertTitle>
		<p>This is Alert's content</p>
	</Alert>
</Story>

<Story name="icon slot" let:args>
	<Alert {...args}>
		<Icon slot="icon" name="brightness" />
		<AlertTitle>Alert Title</AlertTitle>
		This is Alert's content
	</Alert>
</Story>

<Story name="open" args={{ open: true }} let:args>
	<Alert open {...args}>
		<AlertTitle>Alert Title</AlertTitle>
		This is Alert's content
	</Alert>
</Story>

<Story name="type" let:args>
	{#each COLORS as type}
		<Alert {...args} {type}>
			<AlertTitle>Title</AlertTitle>
			Alert {type}
		</Alert>
	{/each}
</Story>

<Story name="variant" let:args>
	{#each ALERT_VARIANTS as variant}
		<Alert {...args} {variant}>Alert {variant}</Alert>
	{/each}
</Story>
