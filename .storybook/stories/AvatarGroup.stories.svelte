<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Avatar, AvatarGroup, Badge, Icon } from '$lib/components'
</script>

<Meta id="Avatar Group" component={AvatarGroup} />

<Story name="default" let:args>
	<div class="example-avatars">
		<AvatarGroup stacked {...args}>
			<Avatar shape="circle">EB</Avatar>
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/001m.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/001f.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/002f.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/002m.jpg" />
			<Avatar shape="circle">+8</Avatar>
		</AvatarGroup>
	</div>
</Story>
<Story name="Avatar group (stacked)" let:args>
	<div class="example-avatars">
		<AvatarGroup stacked {...args}>
			<Avatar shape="circle">EB</Avatar>
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/001m.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/001f.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/002f.jpg" />
			<Avatar shape="circle" image="https://preview.tabler.io/static/avatars/002m.jpg" />
			<Avatar shape="circle">+8</Avatar>
		</AvatarGroup>
	</div>
</Story>

<Story name="Avatars with status" let:args>
	<div class="example-avatars">
		<AvatarGroup {...args}>
			<Avatar image="https://preview.tabler.io/static/avatars/001m.jpg" />
			<Avatar image="https://preview.tabler.io/static/avatars/001f.jpg">
				<Badge dot color="danger" />
			</Avatar>
			<Avatar image="https://preview.tabler.io/static/avatars/002f.jpg">
				<Badge dot color="success" />
			</Avatar>
			<Avatar color="info">
				<Icon name="user" />
				<Badge dot color="info" />
			</Avatar>
			<Avatar color="purple">
				SA
				<Badge dot color="purple" />
			</Avatar>
			<Avatar image="https://preview.tabler.io/static/avatars/003m.jpg">
				<Badge dot color="yellow" />
			</Avatar>
		</AvatarGroup>
	</div>
</Story>
