<script lang="ts">
	import { Card, CardBody, FormAutocomplete, FormInput, FormSelect, FormTextarea, Grid } from '$lib/components'
</script>

<div class="p-2">
	<Card outline>
		<CardBody>
			<Grid gutter="sm">
				<FormAutocomplete placeholder="FormAutocomplete..." label="col-3" items={[]} col="3" />
				<FormTextarea placeholder="FormTextarea..." label="col-4" items={[]} col="4" />
				<FormInput placeholder="FormInput..." label="col-5" items={[]} col="5" />
				<FormSelect placeholder="FormSelect..." label="col-10" items={[]} col="10" />
				<FormInput placeholder="FormInput..." label="col-2" items={[]} col="2" />
			</Grid>
		</CardBody>
	</Card>
</div>
