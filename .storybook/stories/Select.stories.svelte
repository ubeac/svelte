<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { AVATAR_SHAPES, AVATAR_SIZES, AvatarGroup, Badge, Icon, Select } from '$lib/components'
	import { COLORS } from '$lib/types'

	let items = [123, 213, 34, 451, 345, 392]
	let items2 = [
		{
			text: 'option1',
			value: 'value1',
		},
		{
			text: 'option2',
			value: 'value2',
		},
		{
			text: 'option3',
			value: 'value3',
		},
		{
			text: 'option4',
			value: 'value4',
		},
	]
	let items3 = [
		{
			key: 'option1',
			val: 'value1',
		},
		{
			key: 'option2',
			val: 'value2',
		},
		{
			key: 'option3',
			val: 'value3',
		},
		{
			key: 'option4',
			val: 'value4',
		},
	]
	let model1 = ''
	/**
	 * @type {never[]}
	 */
	let model2 = []
</script>

<Meta
	id="Select"
	title="Select"
	component={Select}
	argTypes={{
		color: {
			defaultValue: 'default',
			control: {
				type: 'select',
				options: COLORS,
			},
		},
		shape: {
			defaultValue: 'round',
			control: {
				type: 'radio',
				options: AVATAR_SHAPES,
			},
		},
		size: {
			defaultValue: 'ep',
			control: {
				type: 'radio',
				options: AVATAR_SIZES,
			},
		},
		image: {
			defaultValue: undefined,
			control: {
				type: 'text',
			},
		},
	}} />

<Story name="default" let:args>
	<Select placeholder="please choose ..." bind:model1 {items} {...args} />
</Story>

<Story name="disable" let:args>
	<Select disabled placeholder="please choose ..." bind:model1 {items} {...args} />
</Story>

<Story name="text&value" let:args>
	<Select placeholder="please choose ..." bind:model1 items={items2} {...args} />
</Story>

<Story name="custom text&value" let:args>
	<Select placeholder="please choose ..." bind:model1 items={items3} {...args} key="val" text="key" />
</Story>

<Story name="multiple" let:args>
	<div class="example-avatars">
		<Select placeholder="please choose" bind:model2 {items} {...args} multiple />
	</div>
</Story>
