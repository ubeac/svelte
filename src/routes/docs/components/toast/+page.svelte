<script>
	import { Preview } from '@ubeac/svelte'
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

<h2>Default</h2>
<p>
	Use the default toast message to inform users of the outcome of their action and provide additional information. It
	contains an <code>X</code> close button to make it possible for users to close the toast if they wish.
</p>

<Preview src="./ToastDefault.svelte">
	<ToastDefault />
</Preview>

<h2>With out close button</h2>
<p>
	Set the <code>showCloseButton</code> props as boolean.
</p>

<Preview src="./ToastWithOutCloseButton.svelte">
	<ToastWithOutCloseButton />
</Preview>

<h2>Toggle Show</h2>
<p>
	Set the <code>show</code> props as boolean to show or hide toast.
</p>
<Preview src="./ToastToggleShow.svelte">
	<ToastToggleShow />
</Preview>
