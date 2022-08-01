<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Divider } from '$lib/components'
</script>

<Meta
	title="Components/Divider"
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
		<span>Before</span>
		{#if args.content}
			<Divider {...args}>CONTENT</Divider>
		{:else}
			<Divider {...args} />
		{/if}
		<span>After</span>
	</div>
</Template>

<Story name="default" />
<Story name="content" let:args args={{ content: true }} />
<Story name="vertical" args={{ vertical: true }} />
