<script lang="ts">
	import { Select } from '$lib/components'

	let items = [
		{
			text: 'apple',
			value: 'apple',
		},
		{
			text: 'banana',
			value: 'banana',
		},
		{
			text: 'orange',
			value: 'orange',
		},
		{
			text: 'melon',
			value: 'melon',
		},
	]
	let multiple: any = []
	let single: any = ''
</script>

<h2>Multiple Select: {multiple.join(',')}</h2>
<Select {items} multiple bind:value={multiple} />

<h2>Default Select: {single}</h2>
<Select {items} bind:value={single} />
