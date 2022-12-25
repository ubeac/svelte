<script>
	import { Button, FormCheckboxGroup, El } from '@ubeac/svelte'
	let value = false

	let languages = ['HTML', 'CSS', 'JS', 'SVELTE']
	let colors = ['Red', 'Green', 'Blue', 'Yellow']
	let fruits = ['Apple', 'Banana', 'Cherry']
	let status = ['Active', 'Inactive', 'Online', 'Offline']

	let model = {
		languages: ['CSS'],
		colors: ['Blue', 'Yellow'],
		fruits: [],
		status: undefined,
	}

	const onClick = () => {
		console.log(model)
	}
</script>

<El container>
	<El row>
		<FormCheckboxGroup col="6" inline items={languages} bind:value={model.languages} label="Languages" />
		<FormCheckboxGroup col="6" inline items={colors} bind:value={model.colors} label="Colors" />
		<FormCheckboxGroup col="6" inline items={fruits} bind:value={model.fruits} label="Fruits" required />
		<FormCheckboxGroup col="6" inline items={status} bind:value={model.status} label="Status" required />

		<El col textAlign="end">
			<Button color="primary" on:click={onClick}>Submit</Button>
		</El>
	</El>
</El>

<i>{JSON.stringify(model)}</i>
