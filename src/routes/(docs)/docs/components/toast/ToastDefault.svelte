<script>
	import { ToastBody, Toast, ToastHeader, Avatar } from '@ubeac/svelte'
</script>

<Toast show>
	<ToastHeader>
		<Avatar image="/avatars/000m.jpg" />
		<strong class="me-auto ms-2">Mallory Hulme</strong>
		<small>11 mins ago</small>
	</ToastHeader>
	<ToastBody>
		<div>Hello, world! This is a toast message.</div>
	</ToastBody>
</Toast>
