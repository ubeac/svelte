<script>
	import { FormRadioGroup } from '@ubeac/svelte'

	let items = ['Red', 'Green', 'Blue']
</script>

<FormRadioGroup label="Colors" inline {items} />
