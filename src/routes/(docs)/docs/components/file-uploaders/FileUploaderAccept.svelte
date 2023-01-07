<script lang="ts">
	import { El, FileUploader } from '@ubeac/svelte'

	let value: any
</script>

<El>only choose .png files.</El>
<FileUploader bind:value accept=".png" />

<El mt="3">only choose png, jpg or gif files.</El>
<FileUploader bind:value accept=".png,.jpg,.gif" />

<El>You selected: {value?.[0] ? value[0].name : ''}</El>
