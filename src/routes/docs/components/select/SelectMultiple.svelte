<script lang="ts">
	import { Select } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = []
</script>

<Select multiple bind:value {items} />
<span>{value}</span>
