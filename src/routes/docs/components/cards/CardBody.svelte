<script>
	import { Card, CardBody, El } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Card>
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>
	<El col>
		<Card cardSize="sm">
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>
	<El col>
		<Card cardSize="md">
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>
	<El col>
		<Card cardSize="lg">
			<CardBody>This is some text within a card body.</CardBody>
		</Card>
	</El>
</El>
<El row mt="3">
	<El col>
		<Card rotate="right">
			<CardBody>Card rotate right.</CardBody>
		</Card>
	</El>
	<El col>
		<Card rotate="left">
			<CardBody>Card rotate left.</CardBody>
		</Card>
	</El>
	<El col>
		<Card cardState="active">
			<CardBody>This is a card with active state.</CardBody>
		</Card>
	</El>
	<El col>
		<Card cardState="inactive">
			<CardBody>This is some text inactive state.</CardBody>
		</Card>
	</El>
</El>
