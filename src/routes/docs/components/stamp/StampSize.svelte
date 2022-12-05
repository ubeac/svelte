<script>
	import { El, Card, CardBody, CardTitle, Stamp } from '@ubeac/svelte'
</script>

<El row>
	{#each ['sm', 'md', 'lg'] as size}
		<El col>
			<Card>
				<CardBody>
					<CardTitle>Stamp size: {size}</CardTitle>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book.
					</p>
				</CardBody>
				<Stamp {size} iconPosition="top-end" bgColor="yellow" icon="bell" />
			</Card>
		</El>
	{/each}
</El>
