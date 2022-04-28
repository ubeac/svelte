<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';

	import { ButtonTS } from '../components';
</script>

<Meta
	title="Button TypeScript"
	component={ButtonTS}

	argTypes={{
		text: {
			control: {type: 'text'}
			
		},
		color: {
			control: {
				type: 'radio',
				options: ['red', 'blue', 'green', 'black', 'white']
			}
		},
		backgroundColor: {
			control: {
				type: 'select',
				options: ['red', 'blue', 'green', 'black', 'white']
			}
		}
	}}
/>

<Template let:args>
	<ButtonTS {...args} />
</Template>

<Story name="Red" args={{ color: 'red', text: 'RED' }} />
<Story name="green" args={{ color: 'green', text: 'green' }} />
<Story name="blue" args={{ color: 'blue', text: 'blue' }} />
