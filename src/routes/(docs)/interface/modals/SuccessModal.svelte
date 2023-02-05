<script>
	import {
		Button,
		Dialog,
		DialogBody,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		Card,
		CardBody,
		CardTitle,
	} from '@ubeac/svelte'
	import Icon from '@ubeac/svelte/components/Icon/Icon.svelte'

	let open = false
</script>

<Button on:click={() => (open = true)}>Success modal</Button>

<Dialog size="sm" bind:open>
	<DialogContent>
		<Card class="flex" justifyContent="center" status statusColor="success" statusPosition="top" statusSize="lg">
			<CardTitle>
				<DialogClose />
			</CardTitle>
			<CardBody class="text-center" alignItems="center">
				<Icon size="6x" color="success" name="circle-check" />
				<h3>Payment succedeed</h3>
				<p class="text-center">
					Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.
				</p>
				<div>
					<Button class="me-auto" on:click={() => (open = false)}>Close</Button>
					<Button color="success" on:click={() => (open = false)}>View invoice</Button>
				</div>
			</CardBody>
		</Card>
	</DialogContent>
</Dialog>
