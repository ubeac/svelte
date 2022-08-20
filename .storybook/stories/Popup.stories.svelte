<script>
	import { Button, Popup, POPUP_PLACEMENTS } from '$lib/components'
	import { Meta, Story } from '@storybook/addon-svelte-csf'
</script>

<Meta title="Popup" component={Popup} />

<Story name="Defualt" let:args>
	<div>Target Element</div>
	<Popup {...args}>Content of Popup</Popup>
</Story>

<Story name="Fixed" let:args>
	<div>Target Element</div>
	<Popup class="example-popup example-popup-fixed" fixed {...args}>Content of Popup</Popup>
</Story>

<Story name="Trigger" let:args>
	<Button>Click</Button>
	<Popup class="example-popup" trigger={['click']} {...args}>Content of Click popup</Popup>

	<Button>Hover</Button>
	<Popup class="example-popup" trigger={['hover']} {...args}>Content of Hover popup</Popup>

	<Button>Focus</Button>
	<Popup class="example-popup" trigger={['focus']} {...args}>Content of Focus popup</Popup>
</Story>

<Story name="Persistence" let:args>
	<Button>Click</Button>
	<Popup persistence class="example-popup" trigger={['click']} {...args}>Content of Click popup</Popup>

	<Button>Hover</Button>
	<Popup persistence class="example-popup" trigger={['hover']} {...args}>Content of Hover popup</Popup>

	<Button>Focus</Button>
	<Popup persistence class="example-popup" trigger={['focus']} {...args}>Content of Focus popup</Popup>
</Story>

<Story name="Offset" let:args>
	<Button>Open</Button>
	<Popup class="example-popup" offset={[32, 32]} {...args}>Content of Click popup</Popup>
</Story>

<Story name="Placement" let:args>
	<div class="example-popups">
		{#each POPUP_PLACEMENTS as placement}
			<Button>{placement}</Button>
			<Popup class="example-popup-small" {placement} {...args}>Content of {placement} popup</Popup>
		{/each}
	</div>
</Story>
