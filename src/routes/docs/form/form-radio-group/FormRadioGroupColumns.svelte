<script>
	import { Container, FormRadioGroup, RadioGroup, Row } from '@ubeac/svelte/components'
</script>

<Container>
	<Row>
		<FormRadioGroup cols="3" label="3 cols:" inline name="gender" items={{ m: 'Male', f: 'Female' }} />
		<FormRadioGroup cols="6" label="6 cols:" items={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']} />
		<FormRadioGroup
			cols="3"
			label="3 cols:"
			inline
			items={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
		/>
	</Row>
</Container>
