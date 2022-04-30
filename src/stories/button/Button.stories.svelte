<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button } from '../../components'
</script>

<Meta title="Button" component={Button} />

<Template let:args>
	<Button {...args}>Button</Button>
</Template>

<Story name="Red" args={{ color: 'red' }} />
