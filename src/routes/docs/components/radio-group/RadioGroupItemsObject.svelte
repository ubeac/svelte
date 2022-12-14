<script lang="ts">
	import { RadioGroup } from '@ubeac/svelte'

	let items = {
		'#fffff': 'White',
		'#000000': 'Black',
		'#ff0000': 'Red',
		'#00ff00': 'Green',
	}

	let selected: string
</script>

<RadioGroup {items} bind:value={selected} />

<i>You selected: {value}</i>
