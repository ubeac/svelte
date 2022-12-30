<script>
	import { Doc, Preview } from '@ubeac/svelte'

	import FileUploaderDefault from './FileUploaderDefault.svelte'
	import FileUploaderDisabled from './FileUploaderDisabled.svelte'
	import FileUploaderReadOnly from './FileUploaderReadOnly.svelte'
	import FileUploaderMultiple from './FileUploaderMultiple.svelte'
	import FileUploaderAccept from './FileUploaderAccept.svelte'
	import FileUploaderSizes from './FileUploaderSizes.svelte'
	import FileUploaderStates from './FileUploaderStates.svelte'
</script>

<h1>FileUploader</h1>

<Doc title="Default">
	<!--  -->
</Doc>
<Preview src="./FileUploaderDefault.svelte">
	<FileUploaderDefault />
</Preview>

<Doc title="Sizing">
	You can change the size of a fileUploader input by setting the size property to <code>sm</code>, <code>md</code>, or
	<code>lg</code>.
</Doc>
<Preview src="./FileUploaderSizes.svelte">
	<FileUploaderSizes />
</Preview>

<Doc title="Disabled">
	Set the disabled boolean property on a fileUploader to give it a grayed out appearance, remove pointer events, and
	prevent focusing.
</Doc>
<Preview src="./FileUploaderDisabled.svelte">
	<FileUploaderDisabled />
</Preview>

<Doc title="Readonly">
	Set the readonly boolean property on a fileUploader to prevent choosing a file. readonly inputs can still be focused
	and selected, while disabled inputs cannot.
</Doc>
<Preview src="./FileUploaderReadOnly.svelte">
	<FileUploaderReadOnly />
</Preview>

<Doc title="States">
	You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid or invalid state to a
	fileUploader.
</Doc>
<Preview src="./FileUploaderStates.svelte">
	<FileUploaderStates />
</Preview>

<Doc title="Accept">
    Limit file types that a user can select.
</Doc>
<Preview src="./FileUploaderAccept.svelte">
	<FileUploaderAccept />
</Preview>

<Doc title="Multiple">
    Allow choosing Multiple files.
</Doc>
<Preview src="./FileUploaderMultiple.svelte">
	<FileUploaderMultiple />
</Preview>
