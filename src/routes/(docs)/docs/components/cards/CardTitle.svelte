<script>
	import { Card, CardBody, CardHeader, CardTitle, El } from '@ubeac/svelte'
</script>

<Card title="Card title">
	<CardBody>This is some text within a card body.</CardBody>
</Card>
<Card>
	<CardHeader>
		<CardTitle>Card title in card header</CardTitle>
	</CardHeader>
	<CardBody>This is some text within a card body.</CardBody>
</Card>
<Card borderless>
	<CardHeader>
		<CardTitle>Borderless card</CardTitle>
	</CardHeader>
	<CardBody>This is some text within a card body.</CardBody>
</Card>
<Card>
	<CardHeader light>
		<CardTitle>Card title in card header</CardTitle>
	</CardHeader>
	<CardBody>This is some text within a card body.</CardBody>
</Card>
