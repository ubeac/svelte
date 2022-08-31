<script>
	import { Collapse, CollapseToggler } from '$lib/components'
	import { Meta, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Elements/Collapse" component={Collapse} />

<Story name="Default" let:args>
	<CollapseToggler id="c-1">Toggler</CollapseToggler>
	<Collapse id="c-1" {...args}>Content of collapse</Collapse>
</Story>

<Story name="Open" let:args>
	<CollapseToggler id="c-2">Toggler</CollapseToggler>
	<Collapse id="c-2" open {...args}>Content of collapse</Collapse>
</Story>

<Story name="Group" let:args>
	<div id="g-1">
		<CollapseToggler id="c-3">Toggler 1</CollapseToggler>
		<CollapseToggler id="c-4">Toggler 2</CollapseToggler>
		<CollapseToggler id="c-5">Toggler 3</CollapseToggler>
		<CollapseToggler id="c-6">Toggler 4</CollapseToggler>

		<Collapse group="#g-1" id="c-3" {...args}>Content of collapse 1</Collapse>
		<Collapse group="#g-1" id="c-4" {...args}>Content of collapse 2</Collapse>
		<Collapse group="#g-1" id="c-5" {...args}>Content of collapse 3</Collapse>
		<Collapse group="#g-1" id="c-6" {...args}>Content of collapse 4</Collapse>
	</div>
</Story>
