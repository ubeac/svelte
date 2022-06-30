<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { Autocomplete } from '$lib/components'

	let items1 = [1, 2, 3, 10, 11, 12, 13, 21, 22, 23, 31, 32, 33]
	let items2 = ['a', 'b', 'c', 'aa', 'ab', 'ac', 'ad', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']
</script>

<Meta title="Autocomplete" component={Autocomplete} />

<Template let:args>
	<Autocomplete {...args} />
</Template>

<Story name="default" />

<Story name="placeholder" args={{ items: items1, placeholder: 'this is placeholder' }} />
<Story name="placeholder" args={{ items: items2, placeholder: 'this is placeholder' }} />
<Story name="preview" args={{ items: items1, placeholder: 'this is placeholder', preview: true }} />
<Story name="preview" args={{ items: items2, placeholder: 'this is placeholder', preview: true }} />
<Story name="readonly" args={{ items: items1, placeholder: 'this is placeholder', readonly: true }} />
<Story name="readonly" args={{ items: items2, placeholder: 'this is placeholder', readonly: true }} />
<Story name="disabled" args={{ items: items1, placeholder: 'this is placeholder', disabled: true }} />
<Story name="disabled" args={{ items: items2, placeholder: 'this is placeholder', disabled: true }} />
<Story name="multiple" args={{ items: items1, placeholder: 'this is placeholder', multiple: true }} />
<Story name="multiple" args={{ items: items2, placeholder: 'this is placeholder', multiple: true }} />
