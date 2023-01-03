<script>
	import { Button, FormInput, Popover, PopoverBody, FormRadioGroup, El } from '@ubeac/svelte'
</script>

<Button>Choose Filters</Button>

<Popover trigger="click">
	<!-- <PopoverHeader>Popover title</PopoverHeader> -->
	<PopoverBody>
		<El row>
			<FormRadioGroup items={['equal', 'like', 'between']} label="Type" />
			<FormInput label="Text" />
		</El>
	</PopoverBody>
</Popover>
