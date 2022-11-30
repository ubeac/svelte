<script>
	import { Card, CardBody, El, CardTitle } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Card status statusColor="danger" statusPosition="top" statusSize="lg">
			<CardBody>
				<CardTitle>Card with top status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
					neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</El>
	<El col>
		<Card status statusColor="green" statusPosition="start" statusSize="md">
			<CardBody>
				<CardTitle>Card with side status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
					neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</El>
	<El col>
		<Card status statusColor="pink" statusPosition="bottom" statusSize="sm">
			<CardBody>
				<CardTitle>Card with bottom status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
					neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</El>
</El>
