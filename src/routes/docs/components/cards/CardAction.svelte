<script>
	import { Card, CardBody, CardHeader, CardTitle, CardActions, CardFooter } from '@ubeac/svelte'
	import { Button } from '@ubeac/svelte/components/button'
	import { Icon } from '@ubeac/svelte/components/icon'
</script>

<Card title="Footer text with actions">
	<CardBody>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book.
		</p>
	</CardBody>
	<CardFooter>
		Footer text
		<CardActions>
			<Button color="danger"><Icon name="trash" />Remove</Button>
			<Button color="primary">Continue</Button>
		</CardActions>
	</CardFooter>
</Card>
