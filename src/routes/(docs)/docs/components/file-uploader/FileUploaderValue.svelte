<script>
	import { FileUploader } from '@ubeac/svelte'

	let value
	$: console.log(value)
</script>

<FileUploader bind:value />

{#if value}
	You selected: {value[0].name}
{/if}
