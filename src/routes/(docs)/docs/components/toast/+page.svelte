<script>
	import { Doc, Preview } from '$lib/docs-components'
	import ToastDefault from './ToastDefault.svelte'
	import ToastWithOutCloseButton from './ToastWithOutCloseButton.svelte'
	import ToastToggleShow from './ToastToggleShow.svelte'
</script>

<h1>Toast</h1>
<p>
	Toasts are lightweight alert boxes which display for a few seconds after a user has taken an action, to inform them of
	the state or outcome. They can be used when a user clicks a button or submits a form and their aim is to provide
	feedback, rather than encourage to take action.
</p>

<Doc title="Default">
	Use the default toast message to inform users of the outcome of their action and provide additional information. It
	contains an <code>X</code> close button to make it possible for users to close the toast if they wish.
</Doc>

<Preview src="./ToastDefault.svelte">
	<ToastDefault />
</Preview>

<Doc title="Without close button">
	Set the <code>showCloseButton</code> props as boolean.
</Doc>
<Preview src="./ToastWithOutCloseButton.svelte">
	<ToastWithOutCloseButton />
</Preview>

<Doc title="Toggle Show">
	Set the <code>show</code> props as boolean to show or hide toast.
</Doc>
<Preview src="./ToastToggleShow.svelte">
	<ToastToggleShow />
</Preview>
