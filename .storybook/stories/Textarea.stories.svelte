<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Textarea } from '$lib/components'
</script>

<Meta title="Textarea" component={Textarea} />

<Template let:args>
	<Textarea on:change={console.log} {...args} />
</Template>

<Story name="default" />
<Story name="placeholder" args={{ placeholder: 'this is placeholder' }} />
<Story name="preview" args={{ placeholder: 'this is placeholder', preview: true }} />
<Story name="readonly" args={{ placeholder: 'this is placeholder', readonly: true }} />
<Story name="disabled" args={{ placeholder: 'this is placeholder', disabled: true }} />
