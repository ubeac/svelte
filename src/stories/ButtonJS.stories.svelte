<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { ButtonJS } from '../components'
</script>

<Meta title="Button JSDoc" component={ButtonJS} />

<Template let:args>
	<ButtonJS {...args} />
</Template>

<Story name="Red" args={{ color: 'red', text: 'RED' }} />
<Story name="green" args={{ color: 'green', text: 'green' }} />
<Story name="blue" args={{ color: 'blue', text: 'blue' }} />
