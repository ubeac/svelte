<script>
	import { CheckboxGroup } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let group = []
</script>

<CheckboxGroup {items} bind:group inline />
