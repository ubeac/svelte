<script lang="ts">
	import { Divider } from '$lib/components'
	import FormCheckboxGroup from '$lib/components/form/FormCheckboxGroup.svelte'

	let stayOpen = false

	let value = ['b']
</script>

{value}
<Divider />

<FormCheckboxGroup on:click={console.log} bind:value items={{ a: 1, b: 2, c: 3 }} />
