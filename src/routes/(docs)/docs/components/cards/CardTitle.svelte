<script>
	import { Card, CardBody, CardHeader, CardTitle, El } from '@ubeac/svelte'
</script>

<El row>
	<Card title="Card title" col="12">
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
	<Card col="12">
		<CardHeader>
			<CardTitle>Card title in card header</CardTitle>
		</CardHeader>
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
	<Card borderless col="12">
		<CardHeader>
			<CardTitle>Borderless card</CardTitle>
		</CardHeader>
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
	<Card>
		<CardHeader light col="12">
			<CardTitle>Card title in card header</CardTitle>
		</CardHeader>
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
</El>
