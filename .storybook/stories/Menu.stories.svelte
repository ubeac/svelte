<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf'
	import { Menu, Button, MENU_PLACEMENTS } from '$lib/components'
</script>

<Meta title="Elements/Menu" component={Menu} />

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
		{#each MENU_PLACEMENTS as placement}
			<Button>{placement}</Button>
			<Menu {placement} {...args}>
				<li class="nav-link">Item 1</li>
				<li class="nav-link">Item 2</li>
				<li class="nav-link">Item 3</li>
			</Menu>
		{/each}
	</div>
</Story>
