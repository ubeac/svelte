<script lang="ts">
	import { FileUploader } from '@ubeac/svelte'

	let value: any
</script>

<FileUploader bind:value />
<i>You selected: {value?.[0] ? value[0].name : ''}</i>
