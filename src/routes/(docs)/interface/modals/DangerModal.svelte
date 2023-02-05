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

<Button on:click={() => (open = true)}>Danger modal</Button>

<Dialog size="sm" bind:open>
	<DialogContent>
		<Card class="flex" justifyContent="center" status statusColor="danger" statusPosition="top" statusSize="lg">
			<CardTitle>
				<DialogClose />
			</CardTitle>
			<CardBody class="text-center" alignItems="center">
				<Icon size="6x" color="danger" name="alert-triangle" />
				<h3>Are you sure?</h3>
				<p class="text-center">Do you really want to remove 84 files? What you've done cannot be undone.</p>
				<div>
					<Button class="me-auto" on:click={() => (open = false)}>Cancel</Button>
					<Button color="danger" on:click={() => (open = false)}>Delete 84 items</Button>
				</div>
			</CardBody>
		</Card>
	</DialogContent>
</Dialog>
