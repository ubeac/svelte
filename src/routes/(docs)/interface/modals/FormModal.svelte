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

<Button on:click={() => (open = true)} class="m-2">Modal with form</Button>

<Dialog size="lg" bind:open>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>New report</DialogTitle>
      <DialogClose />
    </DialogHeader>
    <DialogBody>
      <El row>
        <El col="12">
          <FormInput label="Name" placeholder="Enter your name..."/>
        </El>
        <El col="9">
          <FormInput label="Report url" placeholder="Enter URL..."/>
        </El>
        <El col="3">
          <FormSelect bind:value {items} label="Visibility" />
        </El>
        <Divider/>
        <El col="6">
          <FormInput label="Client Name"/>
        </El>
        <El col="6">
        <FormDatePicker label="Reporting period" placeholder="mm/dd/yyyy" bind:value={dateValue} />
        </El>
        <El col="12">
        <FormTextarea label="Additional information"/>
        </El>
      </El>
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
