<script lang="ts">
	import { El, Select } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<Select multiple bind:value {items} size="3" />
<El>value: {JSON.stringify(value)}</El>
