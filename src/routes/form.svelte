<script lang="ts">
	import * as yup from 'yup'

	import { Form, FormInput, Grid, GridItem } from '$lib/components'
	import Button from '$lib/components/button/Button.svelte'
	import Card from '$lib/components/card/Card.svelte'
	import CardBody from '$lib/components/card/CardBody.svelte'
	import Divider from '$lib/components/divider/Divider.svelte'

	let isValid = false
	let values = {}

	let ageEl

	let schema = {
		name: yup
			.string()
			.required('This is required')
			.min(3, 'Should be at least 3 characters')
			.max(10, 'should be smaller than 10 characters'),
		email: yup.string().email('should be a valid email').required('this is required'),
	}

	async function submit({ detail }) {
		const result = await detail.validate()

		isValid = result.isValid
		values = result.values

		if (isValid) {
			console.log('Now we can submit form', values)
		}
	}

	let isAgeValid = false
	let age
	async function validageAge() {
		const result = await ageEl.validate()
		isAgeValid = typeof result !== 'undefined'
		age = result
	}
</script>

<Card class="m-4" outline>
	<CardBody>
		<Form {schema} on:submitted={submit}>
			<Grid>
				<FormInput col="12" label="Name" name="name" />
				<FormInput col="12" label="Email" name="email" />

				<!-- schema for input component -->
				<FormInput
					bind:this={ageEl}
					schema={yup
						.number()
						.min(10, 'You are too young')
						.max(100, 'You are too old')
						.required('You should fill this field')}
					col="10"
					type="number"
					label="Age"
					name="age" />
				<GridItem col="2">
					<Button block on:click={validageAge}>Validate</Button>
				</GridItem>

				<Button>Validate</Button>
				<Button color="blue" disabled={!isValid}>Submit</Button>
			</Grid>
		</Form>
	</CardBody>
</Card>

{#if isValid}
	Form Is Valid
{:else}
	Form Is not Valid yet!
{/if}
<br />
{#if isAgeValid}
	Age is valid
{:else}
	Age is not valid
{/if}
<pre class="p-2 m-2">{JSON.stringify({ values }, null, 2)}</pre>
