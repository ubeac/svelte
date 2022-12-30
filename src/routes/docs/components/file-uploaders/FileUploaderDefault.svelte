<script lang="ts">
	import { El, FileUploader } from '@ubeac/svelte'

	let value: any
</script>

<FileUploader bind:value />
<El>You selected: {value?.[0] ? value[0].name : ''}</El>
