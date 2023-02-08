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
		FormDatePicker,
		FormInput,
		FormSelect,
		FormTextarea,
		Icon,
	} from '@ubeac/svelte'

	let open = false

	let items = ['Private', 'Public', 'Hidden']
	let value: any = 'Private'
	let dateValue: string
</script>

<Button on:click={() => (open = true)} class="m-2">Modal with form</Button>

<Dialog size="lg" bind:open>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>New report</DialogTitle>
			<DialogClose />
		</DialogHeader>
		<DialogBody row>
			<FormInput col="12" label="Name" placeholder="Enter your name..." />
			<FormInput col="9" label="Report url" placeholder="Enter URL..." />
			<FormSelect col="3" bind:value {items} label="Visibility" />
			<FormInput col="6" label="Client Name" />
			<FormDatePicker col="6" label="Reporting period" placeholder="mm/dd/yyyy" bind:value={dateValue} />
			<FormTextarea col="12" label="Additional information" />
		</DialogBody>
		<DialogFooter>
			<Button class="me-auto" on:click={() => (open = false)}>Cancel</Button>
			<Button color="primary" on:click={() => (open = false)}>
				<Icon name="plus" />
				Create new report
			</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
