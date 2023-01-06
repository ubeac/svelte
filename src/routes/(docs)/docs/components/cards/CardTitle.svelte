<script>
	import { Card, CardBody, CardHeader, CardTitle, El } from '@ubeac/svelte'
</script>

<El row>
	<El col="12">
		<Card title="Card title">
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>
	<El col="12">
		<Card>
			<CardHeader>
				<CardTitle>Card title in card header</CardTitle>
			</CardHeader>
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>

	<El col="12">
		<Card borderless>
			<CardHeader>
				<CardTitle>Borderless card</CardTitle>
			</CardHeader>
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>

	<El col="12">
		<Card>
			<CardHeader light>
				<CardTitle>Card title in card header</CardTitle>
			</CardHeader>
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>
</El>
