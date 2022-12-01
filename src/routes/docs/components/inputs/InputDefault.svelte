<script lang="ts">
	import { Input } from '@ubeac/svelte'

	let value: any
	$: console.log(value)
</script>

<Input bind:value placeholder="Try to type something..." />
{#if value}
	You typed:
	<p>Value: {value}</p>
{/if}

<Input><slot name="start">this is text</slot></Input>
