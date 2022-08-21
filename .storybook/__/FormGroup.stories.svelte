<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { FormGroup, Icon, Input, Spinner } from '$lib/components'
	import { classname } from '$lib/utils'
</script>

<Meta title="FormGroup" component={FormGroup} />

<Template let:args>
	<FormGroup {...args}>
		<div class={classname('input-icon')}>
			<Icon name="user" />
		</div>
		<Input placeholder="Type Something" />
		<div class={classname('input-icon')}>
			<Spinner />
		</div>
	</FormGroup>
</Template>

<Story name="default" />

<Story name="input first" let:args>
	<FormGroup {...args}>
		<Input placeholder="Type Something" />
		<div class={classname('input-icon')}>
			<Spinner />
		</div>
	</FormGroup>
</Story>

<Story name="input last" let:args>
	<FormGroup {...args}>
		<div class={classname('input-icon')}>
			<Icon name="user" />
		</div>
		<Input placeholder="Type Something" />
	</FormGroup>
</Story>
