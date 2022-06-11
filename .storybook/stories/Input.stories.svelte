<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'
	import { Input } from '@app/components'
</script>

<Meta component={Input} title="Input" />

<Template let:args>
	<Input {...args} />
</Template>

<Story name="default" />

<Story name="preview" args={{ value: 'content', preview: true }} />
<Story name="disabled" args={{ disabled: true, value: 'Content' }} />
<Story name="read-only" args={{ value: 'content', readonly: true }} />
<Story name="placeholder" args={{ placeholder: 'this is placeholder' }} />
<Story name="value" args={{ value: 'Test' }} />
<Story name="type" args={{ type: 'password', value: 'Test' }} />
<Story name="id" args={{ id: 'input-1' }} />
