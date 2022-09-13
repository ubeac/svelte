<script>
	import { Input } from '@ubeac/svelte'

	let value
</script>

<Input placeholder="Type something..." bind:value />

{#if value}
	You typed: {value}
{/if}
