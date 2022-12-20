<script lang="ts">
	import { El, FormSelect } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: any = undefined
</script>

<FormSelect bind:value {items} label="Label" />
<FormSelect bind:value {items} required label="Label" />
<El>value: {value}</El>
