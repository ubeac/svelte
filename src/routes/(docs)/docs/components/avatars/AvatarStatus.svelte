<script>
	import { Avatar } from '@ubeac/svelte'
	import Badge from '@ubeac/svelte/components/Badge/Badge.svelte'
	import Icon from '@ubeac/svelte/components/Icon/Icon.svelte'
</script>

<Avatar><img src="https://preview.tabler.io/static/avatars/000m.jpg" alt="" /><Badge dot color="success" /></Avatar>
<Avatar>
	<Icon name="user" />
	<Badge color="warning">5</Badge>
</Avatar>
<Avatar><img src="https://preview.tabler.io/static/avatars/002f.jpg" alt="" /><Badge dot color="primary" /></Avatar>
<Avatar>
	<Icon name="plus" />
	<Badge dot color="danger" />
</Avatar>
