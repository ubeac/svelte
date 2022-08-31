<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Confirm } from '$lib/components'

	const TYPES = ['question', 'success', 'warning', 'info', 'error']
</script>

<Meta
	component={Confirm}
	title="Elements/Confirm"
	argTypes={{
		type: {
			control: {
				type: 'select',
				options: TYPES,
			},
		},
	}} />

<Template let:args>
	<Confirm open title="default title" description="default description" {...args} />
</Template>

<Story name="default" />

<Story name="description" args={{ description: 'this is description' }} />
<Story name="open" args={{ open: true }} />
<Story name="title" args={{ title: 'this is title' }} />
<Story name="type" args={{ type: 'question' }} />
<Story name="slots" let:args>
	<Confirm open {...args}>
		<h2 slot="title">Hello</h2>
		<h4 slot="description">Description</h4>
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corrupti dolor repudiandae inventore sequi,
			repellat ut dicta possimus magni vel. Quaerat asperiores et reiciendis perspiciatis quae libero fuga veniam illum!
		</div>
	</Confirm>
</Story>
