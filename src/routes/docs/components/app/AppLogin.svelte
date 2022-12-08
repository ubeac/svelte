<script>
	import { App, Button, Card, CardBody, Col, El, FormInput } from '@ubeac/svelte'
</script>

<App class="centered">
	<El container>
		<El row>
			<Col offset="3" cols="6">
				<Card outline>
					<CardBody>
						<El container>
							<FormInput placeholder="Enter your username" label="username" />
							<FormInput placeholder="Enter your password" label="password" type="password" />

							<Col offset="9" cols="auto">
								<Button block color="primary">Login</Button>
							</Col>
						</El>
					</CardBody>
				</Card>
			</Col>
		</El>
	</El>
</App>

<style global>
	.centered {
		display: flex;
		align-items: center;
		justify-content: center;
		color: black;
	}
</style>
