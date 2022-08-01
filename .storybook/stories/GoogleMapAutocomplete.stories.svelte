<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import { GoogleMapAutocomplete } from '$lib/components'
</script>

<Meta title="Components/Map/GoogleMapAutocomplete" component={GoogleMapAutocomplete} />

<Template let:args>
	<GoogleMapAutocomplete {...args} />
</Template>

<Story name="default" />
<Story name="title" args={{ title: 'Store' }} />
