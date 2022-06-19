<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Avatar } from '$lib/components'
</script>

<Meta id="Avatar Group" component={Avatar.Group} />

<Template let:args>
	<Avatar.Group {...args}>
		<Avatar>A</Avatar>
		<Avatar>B</Avatar>
		<Avatar>C</Avatar>
		<Avatar>D</Avatar>
	</Avatar.Group>
	<br />
	<br />
	<br />
	<Avatar.Group {...args}>
		<Avatar size="sm" shape="circle">A</Avatar>
		<Avatar size="sm" shape="circle">B</Avatar>
		<Avatar size="sm" shape="circle">C</Avatar>
		<Avatar size="sm" shape="circle">D</Avatar>
	</Avatar.Group>
</Template>

<Story name="default" />
<Story name="stacked" args={{ stacked: true }} />
