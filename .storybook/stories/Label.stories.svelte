<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Label } from '$lib/components'
</script>

<Meta title="Components/Label" component={Label} />

<Template let:args>
	<Label {...args}>{args.slot}</Label>
</Template>

<Story name="default" args={{ slot: 'Label text' }} />
<Story name="associated with input" args={{ slot: 'Click Me', for: 'input-1' }} let:args>
	<Label {...args}>{args.slot}</Label>
	<input class="form-control" id="input-1" />
</Story>
<Story name="associated with Checkbox" args={{ slot: 'Checkbox', for: 'check-1' }} let:args>
	<div>
		<input type="checkbox" class="form-check-input" id="check-1" />
		<Label {...args}>{args.slot}</Label>
	</div>
</Story>
