<script>
	import { Checkbox, FormCheckbox, CheckboxGroup, FormCheckboxGroup } from '../components'
	import FormRadioGroup from '../components/Form/FormRadioGroup.svelte'

	let value
	let group = ['html', 'css']
	let radioValue

	$: console.log({ value })
	$: console.log({ group })
</script>

wer
<a href="/docs">Documentation website</a>
<br />
<a href="https://svelte.ubeac.io/storybook">Storybook</a>

<Checkbox bind:value>Test</Checkbox>
<FormCheckbox bind:value>Test</FormCheckbox>

<CheckboxGroup bind:value={group} items={['html', 'css', 'js', 'svelte']} />

<FormCheckboxGroup label="TEST" bind:value={group} items={['html', 'css', 'js', 'svelte']} />
<FormRadioGroup bind:value={radioValue} items={['html', 'css', 'js', 'svelte']} />

{radioValue}
