<script lang="ts">
	import { El, FileUploader } from '@ubeac/svelte'

	let value: any
</script>

<El>Choose multiple files by holding Ctrl key.</El>
<FileUploader multiple bind:value />

<El>You selected:</El>

{#if value}
	<El tag="ul">
		{#each [...value] as file}
			<El tag="li">{file.name}</El>
		{/each}
	</El>
{/if}
