<script>
	import { App, Button, Card, CardBody, Col, Container, FormInput, Row } from '@ubeac/svelte/components'
</script>

<App class="centered">
	<Container>
		<Row>
			<Col offset="3" cols="6">
				<Card outline>
					<CardBody>
						<Container>
							<FormInput placeholder="Enter your username" label="username" />
							<FormInput placeholder="Enter your password" label="password" type="password" />

							<Col offset="9" cols="auto">
								<Button block color="primary">Login</Button>
							</Col>
						</Container>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Container>
</App>

<style global>
	.centered {
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
	}
</style>
