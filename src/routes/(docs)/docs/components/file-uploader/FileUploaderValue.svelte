<script lang="ts">
	import { FileUploader } from '@ubeac/svelte'

	let value: any = undefined
</script>

<FileUploader bind:value />

{#if value}
	You selected: {value[0].name}
{/if}
