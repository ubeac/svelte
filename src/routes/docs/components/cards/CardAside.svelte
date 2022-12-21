<script>
	import { Icon, El, Avatar, Card, CardBody, CardTitle } from '@ubeac/svelte'
</script>

<Card>
	<El row>
		<El colXl="3" colLg="4" colMd="6">
			<img src="https://preview.tabler.io/static/photos/pink-desk-in-the-home-office.jpg" alt="" />
		</El>
		<El col>
			<CardBody>
				<CardTitle>Shut up!</CardTitle>
				<p>Burn her! How do you know she is a witch? You don't frighten us, English pig-dogs! Go and boil yo...</p>
				<El row class="mt-4" align="" justify="start">
					<El col="auto">
						<Avatar>
							<img src="https://preview.tabler.io/static/avatars/001f.jpg" alt="" />
						</Avatar>
					</El>
					<El col textAlign="start">
						<div class="text-body">Egan Poetz</div>
						<span class="text-muted">3 days ago</span>
					</El>
					<El col="auto" mt="3">
						<Icon name="heart" />
					</El>
				</El>
			</CardBody>
		</El>
	</El>
</Card>
