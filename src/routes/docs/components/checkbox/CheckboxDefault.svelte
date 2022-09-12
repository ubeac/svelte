<script>
	import { Checkbox } from '@ubeac/svelte'

	let checked = false
</script>

<Checkbox value={checked} bind:checked label="checkbox" />
