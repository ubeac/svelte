<script lang="ts">
	import {
		Button,
		Dialog,
		DialogBody,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		FormInput,
		FormTextarea,
	} from '@ubeac/svelte'

	let open = false
</script>

<Button on:click={() => (open = true)} m="2" ms="0">Modal with simple form</Button>

<Dialog size="lg" bind:open>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Add a new team</DialogTitle>
			<DialogClose />
		</DialogHeader>
		<DialogBody row>
			<FormInput col="12" label="Name" placeholder="Enter your name..." />
			<FormTextarea col="12" label="Additional info" />
		</DialogBody>
		<DialogFooter>
			<Button class="me-auto" on:click={() => (open = false)}>Cancel</Button>
			<Button color="primary" on:click={() => (open = false)}>Add Team</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
