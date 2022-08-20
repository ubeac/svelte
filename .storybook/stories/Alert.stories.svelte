<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { Alert, AlertTitle, ALERT_VARIANTS, Avatar, Button, Icon } from '$lib/components'
	import { COLORS } from '$lib/types'
</script>

<Meta
	title="Alert"
	component={Alert}
	argTypes={{
		dismissible: {
			control: {
				type: 'boolean',
			},
		},
		open: {
			control: {
				type: 'boolean',
			},
		},
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
	}} />

<Story name="Default" let:args>
	<Alert {...args}>
		<AlertTitle>Title</AlertTitle>
		This is Alert's content
	</Alert>
</Story>

<Story name="Type" let:args>
	{#each COLORS as type}
		<Alert {type} {...args}>
			<AlertTitle>Title - {type}</AlertTitle>
			This is Alert's content
		</Alert>
	{/each}
</Story>

<Story name="Link" let:args>
	<Alert type="success" {...args}>
		This is a success alert — <Button color="success" shape="link">check it out</Button>!
	</Alert>
	<Alert type="info" {...args}>
		This is a info alert — <Button color="info" shape="link">check it out</Button>!
	</Alert>
	<Alert type="warning" {...args}>
		This is a warning alert — <Button color="warning" shape="link">check it out</Button>!
	</Alert>
	<Alert type="danger" {...args}>
		This is a danger alert — <Button color="danger" shape="link">check it out</Button>!
	</Alert>
</Story>

<Story name="Icon" let:args>
	<Alert icon="check" {...args}>
		<AlertTitle>Wow! Everything worked!</AlertTitle>
		Your account has been saved!
	</Alert>
</Story>

<Story name="Dismissible" let:args>
	<Alert dismissible {...args}>
		<AlertTitle>Wow! Everything worked!</AlertTitle>
		Your account has been saved!
	</Alert>
</Story>

<Story name="Avatar" let:args>
	<Alert {...args}>
		<Avatar slot="icon">UB</Avatar>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
		ipsum dolor sit amet, consectetur adipisicing elit.
	</Alert>
</Story>

<Story name="Actions" let:args>
	<Alert {...args}>
		<AlertTitle>Title</AlertTitle>
		<p>This is Alert's content</p>
		<div slot="actions">
			<Button color="green">Ok</Button>
			<Button>Cancel</Button>
		</div>
	</Alert>
</Story>

<Story name="Duration" let:args>
	<Alert duration={2000} {...args}>
		<AlertTitle>Title</AlertTitle>
		This is Alert's content
	</Alert>
</Story>

<Story name="Variant" let:args>
	{#each ALERT_VARIANTS as variant}
		<Alert {variant} {...args}>Alert - {variant}</Alert>
	{/each}
</Story>

<Story name="Complex" let:args>
	<Alert dismissible type="purple" {...args}>
		<Avatar slot="icon" image="https://picsum.photos/id/1005/90/90" />
		<AlertTitle>Title</AlertTitle>
		<p>This is Alert's content — <Button color="purple" shape="link">check it out</Button></p>
		<div slot="actions">
			<Button color="purple">Ok</Button>
			<Button>Cancel</Button>
		</div>
	</Alert>
</Story>
