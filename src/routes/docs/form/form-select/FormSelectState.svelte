<script lang="ts">
	import { FormSelect } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue', 'GHI', 'Cyan', 'DEF', 'Black', 'ABC']
	let value: any = undefined
</script>

<FormSelect bind:value {items} label="Favorite Color:" state="valid" />
<FormSelect bind:value {items} label="Favorite Color:" state="invalid" />
