<script>
	import { El, FormFileUploader } from '@ubeac/svelte'
</script>

<El row>
	<FormFileUploader label="Profile Picture" hint="Choose a file smaller than 2mb" />
	<FormFileUploader label="Profile Picture" state="valid" hint="the file size is less than 2mb!" />
	<FormFileUploader label="Profile Picture" state="invalid" hint="the file is larger than 2mb!" />
</El>
