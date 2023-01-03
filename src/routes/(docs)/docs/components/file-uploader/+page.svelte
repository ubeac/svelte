<script>
	import { Preview } from '$lib/components'

	import FileUploaderDefault from './FileUploaderDefault.svelte'
	import FileUploaderDisabled from './FileUploaderDisabled.svelte'
	import FileUploaderAccept from './FileUploaderAccept.svelte'
	import FileUploaderMultiple from './FileUploaderMultiple.svelte'
	import FileUploaderSizes from './FileUploaderSizes.svelte'
	import FileUploaderValue from './FileUploaderValue.svelte'
</script>

<h1>FileUploader</h1>
<p>FileUploader components are used for collecting files from local device of user.</p>

<Preview src="./FileUploaderDefault.svelte">
	<FileUploaderDefault />
</Preview>

<h2>Sizes</h2>
<p>Use size prop to change size of FileUploader input</p>
<Preview vertical src="./FileUploaderSizes.svelte">
	<FileUploaderSizes />
</Preview>

<h2>Disabled</h2>
<p>Set FileUploader disabled</p>
<Preview src="./FileUploaderDisabled.svelte">
	<FileUploaderDisabled />
</Preview>

<h2>Accept</h2>
<p>You can set file types which are allowed to select.</p>
<Preview src="./FileUploaderAccept.svelte">
	<FileUploaderAccept />
</Preview>

<h2>Multiple</h2>
<p>Allows User to select multiple files.</p>
<Preview src="./FileUploaderMultiple.svelte">
	<FileUploaderMultiple />
</Preview>

<h2>Value</h2>
<p>You can get selected files using bind:value</p>
<Preview vertical src="./FileUploaderValue.svelte">
	<FileUploaderValue />
</Preview>
