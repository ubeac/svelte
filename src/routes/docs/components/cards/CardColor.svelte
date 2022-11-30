<script>
	import { Card, CardBody, El, CardTitle } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Card status statusColor="danger" statusPosition="top">
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
		<Card status statusColor="green" statusPosition="start">
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
		<Card status statusColor="pink" statusPosition="bottom">
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
