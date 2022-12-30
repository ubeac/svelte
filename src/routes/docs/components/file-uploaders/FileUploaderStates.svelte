<script>
	import { El, FileUploader } from '@ubeac/svelte'
</script>

<El mt="3">state is not set for this:</El>
<FileUploader />

<El mt="3">this is valid state:</El>
<FileUploader state="valid" />

<El mt="3">this is invalid state:</El>
<FileUploader state="invalid" />
