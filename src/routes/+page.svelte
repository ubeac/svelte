<script lang="ts">
	import { Checkbox, CheckboxGroup, FormCheckboxGroup } from '$lib/components'

	import FormDatePicker from '../components/form/FormDatePicker.svelte'

	let value = false
	let group: number[] = []
</script>

<a href="/docs">Documentation website</a>
<br />
<a href="https://svelte.ubeac.io/storybook">Storybook</a>



<FormDatePicker>
	<div slot="message" if={true}>Hello</div>
</FormDatePicker>



