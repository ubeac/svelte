<script>
	import { FormCheckboxGroup, FormCheckbox } from '$lib/components'

	let items = [
		{ text: 'apple', key: 'apple' },
		{ text: 'banana', key: 'banana' },
		{ text: 'orange', key: 'orange' },
		{ text: 'plum', key: 'plum' },
	]
</script>

<h3>Group FormCheckbox</h3>
<FormCheckboxGroup {items} on:changed={(e) => console.log(e.detail)} />
<h3>Single FormCheckbox</h3>
<FormCheckbox label="Single FormCheckbox" on:changed={(e) => console.log(e.detail)} />
