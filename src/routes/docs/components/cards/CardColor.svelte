<script>
	import { Card, CardBody, El, CardTitle, CardStatus } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Card>
			<CardStatus color="danger" colorPosition="top" />
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
		<Card>
			<CardStatus color="green" colorPosition="start" />
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
		<Card>
			<CardStatus color="pink" colorPosition="bottom" />
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
