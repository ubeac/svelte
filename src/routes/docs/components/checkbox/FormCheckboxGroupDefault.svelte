<script>
	import { FormCheckboxGroup } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let group = []
</script>

<FormCheckboxGroup {items} bind:group />
