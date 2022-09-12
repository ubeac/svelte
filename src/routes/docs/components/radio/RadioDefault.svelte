<script lang="ts">
	import { Button, Radio } from '@ubeac/svelte'

	let value = false
</script>

<Button on:click={() => (value = false)}>Reset</Button>

<Radio bind:value />
