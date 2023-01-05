<script>
	import { Card, CardBody, El } from '@ubeac/svelte'
</script>

<El row>
	<Card col="12">
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
	<Card size="sm" col="12">
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
	<Card size="md" col="12">
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
	<Card size="lg" col="12">
		<CardBody>This is some text within a card body.</CardBody>
	</Card>
</El>
<El row mt="3">
	<Card rotate="right" col="12">
		<CardBody>Card rotate right.</CardBody>
	</Card>
	<Card rotate="left" col="12">
		<CardBody>Card rotate left.</CardBody>
	</Card>
	<Card state="active" col="12">
		<CardBody>This is a card with active state.</CardBody>
	</Card>
	<Card state="inactive" col="12">
		<CardBody>This is some text inactive state.</CardBody>
	</Card>
</El>
