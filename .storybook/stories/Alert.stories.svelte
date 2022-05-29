<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { COLORS } from '@app/types'
	import { Alert, Icon } from '@app/components'
	import AlertTitle from '@app/components/alert/AlertTitle.svelte'
	import Button from '@app/components/button/Button.svelte'

	const TYPES = ['error', 'info', 'success', 'warning', undefined]
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
		<AlertTitle>Alert Title</AlertTitle>
		this is Alert's content
	</Alert>
</Template>

<Story name="default" />
<Story name="Actons" let:args>
	<Alert>
		<AlertTitle>Title</AlertTitle>
		Alert content
		<div slot="actions">
			<Button color="green">Test</Button>
			<Button>Test 2</Button>
		</div>
	</Alert>
</Story>
<Story name="dismissible" args={{ dismissible: true }} />
<Story name="duration" args={{ duration: 2000 }} />
<Story name="icon" args={{ icon: 'moon' }} />
<Story name="icon slot" let:args>
	<Alert {...args}>
		<Icon slot="icon" pack="mdi" name="brightness" />
		<AlertTitle>Alert Title</AlertTitle>
		this is Alert content with material's brightness icon
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
