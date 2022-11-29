<script>
	import { Card, CardBody, CardHeader, CardTitle } from '@ubeac/svelte'
</script>

<Card title="Card title">
	<CardBody>This is some text within a card body.</CardBody>
</Card>

<Card mt="3">
	<CardHeader>
		<CardTitle>Card title in card header</CardTitle>
	</CardHeader>
	<CardBody>This is some text within a card body.</CardBody>
</Card>
