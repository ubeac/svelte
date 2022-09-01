<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { FormInput } from '$lib/components'

	const TYPES = [
		'button',
		'color',
		'email',
		'date',
		'datetime',
		'hidden',
		'number',
		'password',
		'submit',
		'text',
		'url',
	]
</script>

<Meta
	component={FormInput}
	title="Form/FormInput"
	argTypes={{
		type: {
			control: {
				type: 'select',
				options: TYPES,
			},
		},
	}} />

<Template let:args>
	<FormInput {...args} />
</Template>

<Story name="default" />

<Story name="disabled" args={{ disabled: true, value: 'Content' }} />
<Story name="id" args={{ id: 'input-1' }} />
<Story name="icon" args={{ value: 'content', icon: 'user' }} />
<Story name="loading" args={{ loading: true }} />
<Story name="icon + loading" args={{ icon: 'package', loading: true }} />
<Story name="placeholder" args={{ placeholder: 'this is placeholder' }} />
<Story name="preview" args={{ value: 'content', preview: true }} />
<Story name="readonly" args={{ value: 'content', readonly: true }} />
<Story name="type" let:args>
	{#each TYPES as type}
		<FormInput label={type} {...args} {type} />
	{/each}
</Story>
<Story name="type" args={{ type: 'password', value: 'Test' }} />
<Story name="type: number" args={{ type: 'number', value: '123' }} />
<Story name="value" args={{ value: 'Test' }} />
