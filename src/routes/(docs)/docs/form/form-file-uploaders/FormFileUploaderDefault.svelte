<script lang="ts">
	import { El, FormFileUploader } from '@ubeac/svelte'

	let value: FileList
</script>

<FormFileUploader label="Picture" bind:value />
<FormFileUploader label="Picture" required bind:value />
<El tag="i">You Selected: {value ? value?.[0].name : ''}</El>
