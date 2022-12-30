<script>
	import { El, FileUploader } from '@ubeac/svelte'
</script>

<El mt="3">this is default size:</El>
<FileUploader />

<El mt="3">this is small fileUploader:</El>
<FileUploader size="sm" />

<El mt="3">this is medium fileUploader:</El>
<FileUploader size="md" />

<El mt="3">this is large fileUploaderr:</El>
<FileUploader size="lg" />
