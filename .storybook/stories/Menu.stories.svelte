<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Menu, Button } from '$lib/components'

	const PLACEMENTS = [
		'auto',
		'auto-start',
		'auto-end',
		'right',
		'right-start',
		'right-end',
		'left',
		'left-start',
		'left-end',
		'top',
		'top-start',
		'top-end',
		'bottom',
		'bottom-start',
		'bottom-end',
	]
</script>

<Meta title="Menu" component={Menu} />

<Story name="Default" let:args>
	<Button>Dropdown</Button>
	<Menu {...args}>
		<li class="nav-link">Item 1</li>
		<li class="nav-link">Item 2</li>
		<li class="nav-link">Item 3</li>
	</Menu>
</Story>

<Story name="Offset" let:args>
	<Button>Dropdown</Button>
	<Menu offset={[16, 16]} {...args}>
		<li class="nav-link">Item 1</li>
		<li class="nav-link">Item 2</li>
		<li class="nav-link">Item 3</li>
	</Menu>
</Story>

<Story name="Persistence" let:args>
	<Button>Dropdown</Button>
	<Menu persistence {...args}>
		<li class="nav-link">Item 1</li>
		<li class="nav-link">Item 2</li>
		<li class="nav-link">Item 3</li>
	</Menu>
</Story>

<Story name="Placement" let:args>
	<div class="example-menu">
		{#each PLACEMENTS as placement}
			<Button>{placement}</Button>
			<Menu {placement} {...args}>
				<li class="nav-link">Item 1</li>
				<li class="nav-link">Item 2</li>
				<li class="nav-link">Item 3</li>
			</Menu>
		{/each}
	</div>
</Story>
