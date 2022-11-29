<script>
	import { Card, CardBody, CardTitle, CardStamp } from '@ubeac/svelte'
	import { El } from '@ubeac/svelte'
</script>

<El row>
	<El col>
		<Card>
			<CardBody>
				<CardTitle>Stamp color: primary</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CardBody>
			<CardStamp color="primary" icon="bell" iconPosition="top-start" />
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
			<CardStamp color="warning" icon="bell" size="sm" iconPosition="bottom-start" />
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
			<CardStamp color="secondary" icon="bell" size="md" iconPosition="top-end" />
		</Card>
	</El>
	<El col>
		<Card>
			<CardBody>
				<CardTitle>Stamp color: success</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book.
				</p>
			</CardBody>
			<CardStamp color="success" icon="bell" size="lg" iconPosition="bottom-end" />
		</Card>
	</El>
</El>
