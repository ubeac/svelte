<script>
	import { Card, CardBody, CardTitle, Stamp, El } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Card>
			<CardBody>
				<CardTitle>Stamp color: warning</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CardBody>
			<Stamp color="primary" icon="bell" size="md" iconPosition="top-start" />
		</Card>
	</El>
	<El col>
		<Card>
			<CardBody>
				<CardTitle>Stamp color: warning</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CardBody>
			<Stamp color="warning" icon="bell" size="md" iconPosition="bottom-start" />
		</Card>
	</El>
	<El col>
		<Card>
			<CardBody>
				<CardTitle>Stamp color: secondary</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CardBody>
			<Stamp color="secondary" icon="bell" size="md" iconPosition="top-end" />
		</Card>
	</El>
	<El col>
		<Card>
			<Stamp color="success" icon="bell" size="md" iconPosition="bottom-end" />
			<CardBody>
				<CardTitle>Stamp color: success</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CardBody>
		</Card>
	</El>
</El>
