<script lang="ts">
	import { Alert, Button, Col, Container, Row } from '@ubeac/svelte'

	function toggle() {
		value = !value
	}
	let value = false
</script>

<Container>
	<Row>
		<Col>
			<div class="mb-4">
				<Alert dismissible bind:value title="Wow! Everything worked!" color="success">
					<div class="text-muted">Your account has been saved!</div>
				</Alert>
			</div>
		</Col>
	</Row>
	<Row>
		<Col>
			<div>
				<Button on:click={toggle}>Toggle</Button>
			</div>
		</Col>
	</Row>
</Container>
