<script lang="ts">
	import { Button, FormRadio } from '@ubeac/svelte'

	let value = false
</script>

<Button on:click={() => (value = false)}>Reset</Button>

<FormRadio label="With Label" text="radio 1" bind:value />
