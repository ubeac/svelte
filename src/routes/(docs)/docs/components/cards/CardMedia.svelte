<script>
	import { Card, CardBody, CardMedia, CardTitle, El } from '@ubeac/svelte'
</script>

<El row>
	<El col="12" colMd="6" class="mb-6">
		<Card class="example-column example-column-1">
			<CardMedia elementPosition="top">
				<img
					alt=""
					src="https://preview.tabler.io/static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg" />
			</CardMedia>
			<CardBody>
				<CardTitle>Title</CardTitle>
				<p>Body</p>
			</CardBody>
		</Card>
	</El>
	<El col="12" colMd="6" class="mb-6">
		<Card class="example-column example-column-1">
			<CardBody>
				<CardTitle>Title</CardTitle>
				<p>Body</p>
			</CardBody>
			<CardMedia elementPosition="bottom">
				<img
					alt=""
					src="https://preview.tabler.io/static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg" />
			</CardMedia>
		</Card>
	</El>
</El>
