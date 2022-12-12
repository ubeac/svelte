<script lang="ts">
	import { Button, Radio } from '@ubeac/svelte'

	let value = false
</script>

<Button on:click={() => (value = false)}>Reset</Button>

<Radio bind:value text="radio 1" />
<Radio bind:value>Radio 2</Radio>
