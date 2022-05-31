<script lang="ts">
	import { Avatar, Icon } from '@app/components'
</script>

<Avatar>MA</Avatar>
<br /><br />
<Avatar size="xs">
	<img src="https://preview.tabler.io/static/avatars/000m.jpg" />
</Avatar>
<Avatar size="sm">
	<img src="https://preview.tabler.io/static/avatars/000m.jpg" />
</Avatar>
<Avatar size="md">
	<img src="https://preview.tabler.io/static/avatars/000m.jpg" />
</Avatar>
<Avatar size="lg">
	<img src="https://preview.tabler.io/static/avatars/000m.jpg" />
</Avatar>
<Avatar size="xl">
	<img src="https://preview.tabler.io/static/avatars/000m.jpg" />
</Avatar>
<br /><br />
<Avatar color="red">MA</Avatar>
<Avatar color="red">MA</Avatar>
<Avatar color="red">MA</Avatar>
<br /><br />
<Avatar size="xs">
	<Icon name="user" />
</Avatar>
<Avatar size="sm">
	<Icon name="user" />
</Avatar>
<Avatar size="md">
	<Icon name="user" />
</Avatar>
<br /><br />
<Avatar size="xs" color="red">
	<Icon name="user" />
</Avatar>
<Avatar size="sm" color="red">
	<Icon name="user" />
</Avatar>
<Avatar size="md" color="red">
	<Icon name="user" />
</Avatar>
<br /><br />
<Avatar shape="circle">MA</Avatar>
<Avatar shape="round">MA</Avatar>
<Avatar shape="square">MA</Avatar>
<br /><br />
<Avatar size="xs">XS</Avatar>
<Avatar size="sm">SM</Avatar>
<Avatar size="md">MD</Avatar>
<Avatar size="lg">LG</Avatar>
<Avatar size="xl">XL</Avatar>
<br /><br />
<Avatar.Group>
	<Avatar color="green">MA</Avatar>
	<Avatar color="green">SA</Avatar>
	<Avatar color="green">FM</Avatar>
</Avatar.Group>
<br /><br />
<Avatar.Group stacked>
	<Avatar color="green">MA</Avatar>
	<Avatar color="green">SA</Avatar>
	<Avatar color="green">FM</Avatar>
</Avatar.Group>

<style lang="scss" global>
	@import '../scss';
</style>
