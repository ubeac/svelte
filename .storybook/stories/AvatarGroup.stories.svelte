<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Avatar, AvatarGroup } from '$lib/components'
</script>

<Meta id="Avatar Group" component={AvatarGroup} />

<Template let:args>
	<AvatarGroup {...args}>
		<Avatar>A</Avatar>
		<Avatar>B</Avatar>
		<Avatar>C</Avatar>
		<Avatar>D</Avatar>
	</AvatarGroup>
	<br />
	<br />
	<br />
	<AvatarGroup {...args}>
		<Avatar size="sm" shape="circle">A</Avatar>
		<Avatar size="sm" shape="circle">B</Avatar>
		<Avatar size="sm" shape="circle">C</Avatar>
		<Avatar size="sm" shape="circle">D</Avatar>
	</AvatarGroup>
</Template>

<Story name="default" />
<Story name="stacked" args={{ stacked: true }} />
