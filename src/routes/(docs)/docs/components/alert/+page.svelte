<script>
	import { Doc, Preview } from '@ubeac/svelte'
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

<Doc title="Default markup"
	>Depending on the information you need to convey, you can use one of the following types of alert messages -
	<strong>success</strong>, <strong>info</strong>, <strong>warning</strong> or <strong>danger</strong>. Using the right
	type of alert modal will help draw users’ attention to the message and prompt them to take action.
</Doc>
<Preview src="./AlertColor.svelte">
	<AlertColor />
</Preview>

<Doc title="Alert links">
	Add a link to your alert message to redirect users to the details they need to complete or additional information they
	should read.
</Doc>
<Preview src="./AlertLink.svelte">
	<AlertLink />
</Preview>

<Doc title="Dismissible alerts">
	Add the <code>x</code> close button to make an alert modal dismissible. Thanks to that, your alert modal will disappear
	only once the user closes it.
</Doc>
<Preview src="./AlertDismissible.svelte">
	<AlertDismissible />
</Preview>

<Doc title="Alerts with icons">
	Add an icon to your alert modal to make it more user-friendly and help users easily identify the message.
</Doc>
<Preview src="./AlertIcon.svelte">
	<AlertIcon />
</Preview>

<Doc title="Alert with avatar">Add an avatar to your alert modal to make it more personalized.</Doc>
<Preview src="./AlertAvatar.svelte">
	<AlertAvatar />
</Preview>

<Doc title="Alert with buttons">
	Add primary and secondary buttons to your alert modals if you want users to take a particular action based on the
	information included in the modal message.
</Doc>
<Preview src="./AlertButton.svelte">
	<AlertButton />
</Preview>

<Doc title="Important alerts">
	If you want your alert to be really eye-catching, you can add a class <code>alert-important</code>.
</Doc>
<Preview src="./AlertImportant.svelte">
	<AlertImportant />
</Preview>

<Doc title="Alert Show/Hide">If you want show or hide your alert you can do it with if property.</Doc>
<Preview src="./AlertShow.svelte">
	<AlertShow />
</Preview>
