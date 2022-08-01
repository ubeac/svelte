<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Radio } from '$lib/components'
</script>

<Meta
	title="Components/Input/Radio"
	component={Radio}
	argTypes={{
		group: {
			control: 'text',
		},
	}} />

<Template let:args>
	<Radio name="radio" value="radio1" {...args} />
	<Radio name="radio" value="radio2" {...args} />
	<Radio name="radio" value="radio3" {...args} />
</Template>

<Story name="default" />
<Story name="group" args={{ group: 'radio2' }} />
