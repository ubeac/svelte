<script lang="ts">
	import { FormAutocomplete } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue', 'Yellow', 'Cyan', 'Magenta', 'Black', 'White']

	let value: string
</script>

<FormAutocomplete {items} col="6" label="color:" placeholder="choose a color" bind:value />

<i>{value}</i>
