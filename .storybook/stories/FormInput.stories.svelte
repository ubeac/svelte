<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { FormInput } from '@app/components'
</script>

<Meta component={FormInput} title="FormInput" />

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
<Story name="read-only" args={{ value: 'content', readonly: true }} />
<Story name="type" args={{ type: 'password', value: 'Test' }} />
<Story name="type: number" args={{ type: 'number', value: '123' }} />
<Story name="value" args={{ value: 'Test' }} />
