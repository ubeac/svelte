<script>
	import { FormSelect } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value = ''
</script>

<FormSelect bind:value {items} label="col-5" cols="5" />
