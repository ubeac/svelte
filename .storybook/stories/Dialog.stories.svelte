<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Dialog } from '$lib/components'
	import DialogHeader from '$lib/components/dialog/DialogHeader.svelte'
	import DialogTitle from '$lib/components/dialog/DialogTitle.svelte'
	import DialogBody from '$lib/components/dialog/DialogBody.svelte'
	import DialogContent from '$lib/components/dialog/DialogContent.svelte'
</script>

<Meta
	title="Containers/Dialog"
	component={Dialog}
	argTypes={{
		open: {
			control: 'boolean',
		},
		backdrop: {
			control: 'boolean',
		},
		scrollable: {
			control: 'boolean',
		},
		persistent: {
			control: 'boolean',
		},
		placement: {
			control: {
				type: 'radio',
				options: ['top', 'center'],
			},
		},
		size: {
			control: {
				type: 'radio',
				options: ['sm', 'md', 'lg'],
			},
		},
	}} />

<Template>
	<Dialog>body</Dialog>
</Template>

<Template let:args>
	<Dialog open {...args}>
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Dialog Title</DialogTitle>
			</DialogHeader>
			<DialogBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam consequatur dolor facilis quis consequuntur
				excepturi ipsa sint aliquam expedita, sequi optio adipisci, alias impedit similique ea. Ut, harum quod.
				<br />
				<br />
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat commodi quasi aliquid. Repellat veritatis iure
				obcaecati quos quae dolor. Corporis id asperiores pariatur laboriosam est assumenda, dignissimos commodi itaque ipsam?
			</DialogBody>
		</DialogContent>
	</Dialog>
</Template>

<Story name="default" />
<Story name="backdrop" args={{ backdrop: false }} />
<Story name="no header" let:args>
	<Dialog open {...args}>
		<DialogContent>
			<DialogBody>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed similique repellat quo aperiam explicabo distinctio
				quasi ducimus odio pariatur, ex eum est. Itaque debitis doloremque dolorum quae deserunt modi accusamus.
			</DialogBody>
		</DialogContent>
	</Dialog>
</Story>
<Story name="open" args={{ open: true }} />
<Story name="persistent" args={{ persistent: true }} />
<Story name="placement" args={{ placement: 'center' }} />
<Story name="scrollable" args={{ scrollable: true }} />
<Story name="size" args={{ size: 'sm' }} />
