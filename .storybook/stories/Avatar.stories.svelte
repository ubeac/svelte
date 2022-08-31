<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'

	import { AVATAR_SHAPES, AVATAR_SIZES, Avatar, Icon, Badge, AvatarGroup } from '$lib/components'
	import { COLORS } from '$lib/types'
</script>

<Meta
	id="Avatar"
	title="Elements/Avatar"
	component={Avatar}
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
	<Avatar {...args}>AB</Avatar>
</Story>

<Story name="Colors" let:args>
	<div class="example-avatars">
		{#each COLORS as color}
			<Avatar {...args} {color} title={color}>AB</Avatar>
		{/each}
	</div>
</Story>

<Story name="Shapes" let:args>
	<div class="example-avatars">
		<Avatar {...args} shape="round" color="red">AB</Avatar>
		<Avatar {...args} shape="circle" color="blue">CD</Avatar>
		<Avatar {...args} shape="tile" color="green">EF</Avatar>
	</div>
</Story>

<Story name="Sizes" let:args>
	<div class="example-avatars">
		{#each AVATAR_SIZES as size}
			<Avatar {...args} {size}>{size}</Avatar>
		{/each}
	</div>
</Story>

<Story name="Avatars with images" let:args>
	<div class="example-avatars">
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/001m.jpg" />
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/002m.jpg" />
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/003f.jpg" />
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/004f.jpg" />
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/005f.jpg" />
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/006m.jpg" />
	</div>
</Story>

<Story name="Avatars with icons" let:args>
	<div class="example-avatars">
		<Avatar {...args} color="blue">
			<Icon name="user" />
		</Avatar>
		<Avatar {...args} color="azure">
			<Icon name="plus" />
		</Avatar>
		<Avatar {...args} color="indigo">
			<Icon name="heart" />
		</Avatar>
		<Avatar {...args} color="purple">
			<Icon name="ghost" />
		</Avatar>
		<Avatar {...args} color="pink">
			<Icon name="star" />
		</Avatar>
		<Avatar {...args} color="orange">
			<Icon name="minus" />
		</Avatar>
	</div>
</Story>

<Story name="Avatars with status" let:args>
	<div class="example-avatars">
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/001m.jpg" />
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/001f.jpg">
			<Badge dot color="danger" />
		</Avatar>
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/002f.jpg">
			<Badge dot color="success" />
		</Avatar>
		<Avatar {...args} color="info">
			<Icon name="user" />
			<Badge dot color="info" />
		</Avatar>
		<Avatar {...args} color="purple">
			SA
			<Badge dot color="purple" />
		</Avatar>
		<Avatar {...args} image="https://preview.tabler.io/static/avatars/003m.jpg">
			<Badge dot color="yellow" />
		</Avatar>
	</div>
</Story>

<Story name="Avatar group">
	<div class="example-avatars">
		<AvatarGroup>
			<Avatar>EB</Avatar>
			<Avatar image="https://preview.tabler.io/static/avatars/001m.jpg" />
			<Avatar image="https://preview.tabler.io/static/avatars/001f.jpg" />
			<Avatar image="https://preview.tabler.io/static/avatars/002f.jpg" />
			<Avatar image="https://preview.tabler.io/static/avatars/002m.jpg" />
			<Avatar>+8</Avatar>
		</AvatarGroup>
	</div>
</Story>

<Story name="Avatar group stacked">
	<div class="example-avatars">
		<AvatarGroup stacked>
			<Avatar shape="circle">EB</Avatar>
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/001m.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/001f.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/002f.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/002m.jpg" />
			<Avatar shape="circle">+8</Avatar>
		</AvatarGroup>
	</div>
</Story>
