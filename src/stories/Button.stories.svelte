<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import { Button } from '../lib';
</script>

<Meta
	title="Button"
	component={Button}
	parameters={{
    backgrounds: {
    values: [
      {name: 'dark', value: '#202020'},
      {name: 'light', value: '#fff'},
    ]
  }
}}
/>

<Template let:args>
	<Button {...args}>{args.label}</Button>
</Template>

<Story name="Red" args={{ color: 'red', label: 'RED' }} />
<Story name="green" args={{ color: 'green', label: 'green' }} />
<Story name="blue" args={{ color: 'blue', label: 'blue' }} />
