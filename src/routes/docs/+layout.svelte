<script>
	import { Page, App, AppHeader, AppFooter, PageBody, Container, Row, Col, Card, CardBody } from '@ubeac/svelte'
</script>

<App theme="light">
	<AppHeader theme="dark">
		<Container fluid="md">
			<Row>
				<Col>this is header</Col>
			</Row>
		</Container>
	</AppHeader>
	<Page>
		<PageBody>
			<Container fluid="md">
				<Row>
					<Col><Card><CardBody><slot /></CardBody></Card></Col>
				</Row>
			</Container>
		</PageBody>
	</Page>
	<AppFooter>
		<Container fluid="md">
			<Row>
				<Col>this is footer</Col>
			</Row>
		</Container>
	</AppFooter>
</App>
