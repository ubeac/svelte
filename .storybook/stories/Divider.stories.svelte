<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Divider } from '@app/components'
</script>

<Meta
	title="Divider"
	component={Divider}
	argTypes={{
		width: {
			control: {
				type: 'radio',
				options: ['thin', 'medium', 'thick'],
			},
		},
		type: { control: { type: 'radio', options: ['dotted', 'dashed', 'solid'] } },
		variant: { control: { type: 'radio', options: ['full', 'inset', 'middle'] } },
		placement: { control: { type: 'radio', options: ['start', 'center', 'end'] } },
	}} />

<Template let:args>
	<div
		style:display="flex"
		style:height="100px"
		style:width="100%"
		style:flex-direction={args.vertical ? 'row' : 'column'}>
		<span>start</span>
		<Divider {...args}>divider</Divider>
		<span>Button</span>
	</div>
</Template>

<Story name="default" />
<Story name="empty" let:args>
	<div>
		<span>start</span>
		<Divider {...args} />
		<span>end</span>
	</div>
</Story>

<Story name="vertical" args={{ vertical: true }} />
