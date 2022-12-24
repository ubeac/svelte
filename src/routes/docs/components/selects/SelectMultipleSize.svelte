<script lang="ts">
	import { Select } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Select multiple bind:value {items} size="3" />
<i>value: {JSON.stringify(value)}</i>
