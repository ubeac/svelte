<script>
	import { Preview } from '@ubeac/svelte'
	import AlertColor from './AlertColor.svelte'
	import AlertLink from './AlertLink.svelte'
	import AlertDismissible from './AlertDismissible.svelte'
	import AlertIcon from './AlertIcon.svelte'
	import AlertAvatar from './AlertAvatar.svelte'
	import AlertButton from './AlertButton.svelte'
	import AlertImportant from './AlertImportant.svelte'
	import AlertShow from './AlertShow.svelte'
</script>

<h1>Alerts</h1>
<p>
	Alert messages are used to inform users of the status of their action and help them solve any problems that might have
	occurred. Good design of alert modals is very important for the overall user experience of a website or app.
</p>

<h2>Default markup</h2>
<p>
	Depending on the information you need to convey, you can use one of the following types of alert messages - <strong
		>success</strong
	>, <strong>info</strong>, <strong>warning</strong> or <strong>danger</strong>. Using the right type of alert modal
	will help draw users’ attention to the message and prompt them to take action.
</p>

<Preview src="./AlertColor.svelte">
	<AlertColor />
</Preview>

<h2>Alert links</h2>
<p>
	Add a link to your alert message to redirect users to the details they need to complete or additional information they
	should read.
</p>

<Preview src="./AlertLink.svelte">
	<AlertLink />
</Preview>

<h2>Dismissible alerts</h2>
<p>
	Add the <code>x</code> close button to make an alert modal dismissible. Thanks to that, your alert modal will disappear
	only once the user closes it.
</p>
<Preview src="./AlertDismissible.svelte">
	<AlertDismissible />
</Preview>

<h2>Alerts with icons</h2>
<p>Add an icon to your alert modal to make it more user-friendly and help users easily identify the message.</p>
<Preview src="./AlertIcon.svelte">
	<AlertIcon />
</Preview>

<h2>Alert with avatar</h2>
<p>Add an avatar to your alert modal to make it more personalized.</p>
<Preview src="./AlertAvatar.svelte">
	<AlertAvatar />
</Preview>

<h2>Alert with buttons</h2>
<p>
	Add primary and secondary buttons to your alert modals if you want users to take a particular action based on the
	information included in the modal message.
</p>
<Preview src="./AlertButton.svelte">
	<AlertButton />
</Preview>

<h2>Important alerts</h2>
<p>If you want your alert to be really eye-catching, you can add a class <code>alert-important</code>.</p>
<Preview src="./AlertImportant.svelte">
	<AlertImportant />
</Preview>

<h2>Alret Show/Hide</h2>
<p>If you want show or hide your alert you can do it with if property.</p>
<Preview src="./AlertShow.svelte">
	<AlertShow />
</Preview>
