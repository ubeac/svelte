<script lang="ts">
	import { Checkbox, FormCheckbox, Radio } from '$lib/components'
	import { Autocomplete } from '$lib/components'

	let items1 = [1, 2, 3, 10, 11, 12, 13, 21, 22, 23, 31, 32, 33]
	let items2 = ['a', 'b', 'c', 'aa', 'ab', 'ac', 'ad', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']

	let disabled = false
	let multiple = false
</script>

disabled
<Checkbox bind:value={disabled} />
multiple
<Checkbox bind:value={multiple} />
{disabled} - {multiple}

<Autocomplete {disabled} {multiple} items={items1} />
<Autocomplete {disabled} {multiple} items={items2} />
