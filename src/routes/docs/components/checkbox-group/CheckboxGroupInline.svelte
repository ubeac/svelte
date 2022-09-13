<script lang="ts">
	import { CheckboxGroup } from '@ubeac/svelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = []
</script>

<CheckboxGroup {items} bind:value inline />
