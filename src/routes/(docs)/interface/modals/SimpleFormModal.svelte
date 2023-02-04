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
        FormSelect,
        FormDatePicker,
        FormTextarea,
        Divider,
        Icon,
        El
    } from '@ubeac/svelte'

    let open = false

    let items = ['Private', 'Public', 'Hidden']
    let value: any = 'Private'
    let dateValue: string
</script>

<Button on:click={() => (open = true)} class="m-2 ms-0">Modal with simple form</Button>

<Dialog size="lg" bind:open>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add a new team</DialogTitle>
      <DialogClose />
    </DialogHeader>
    <DialogBody>
      <El row>
        <El col="12">
          <FormInput label="Name" placeholder="Enter your name..."/>
        </El>
        <El col="12">
        <FormTextarea label="Additional info"/>
        </El>
      </El>
    </DialogBody>
    <DialogFooter>
      <Button class="me-auto" on:click={() => (open = false)}>Cancel</Button>
      <Button color="primary" on:click={() => (open = false)}>Add Team</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
