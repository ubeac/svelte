<script>
	import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from '.'
	import { navigations } from '../docs/index'
</script>

<Nav>
	{#each navigations as navigation}
		<Dropdown>
			<DropdownToggle>{navigation.title}</DropdownToggle>
			<DropdownMenu>
				{#each navigation.children as menu}
					<DropdownItem icon={menu.icon} href={menu.route}>{menu.title}</DropdownItem>
				{/each}
			</DropdownMenu>
		</Dropdown>
	{/each}
</Nav>
