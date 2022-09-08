<script>
	import { Button, Icon } from '$lib/components'
	import Dropdown from './Dropdown.svelte'
	import DropdownItem from './DropdownItem.svelte'
	import DropdownMenu from './DropdownMenu.svelte'
	import DropdownToggle from './DropdownToggle.svelte'
	import Nav from './Nav.svelte'

	import SidebarItem from './NavItem.svelte'
</script>

<!-- 
<SidebarItem class="dropdown">
	<Button
		class="nav-link dropdown-toggle"
		href="#navbar-components"
		data-bs-toggle="dropdown"
		data-bs-auto-close="false">
		<Icon name="layout-2" />
		<span class="nav-link-title"> Components </span>
	</Button>
	<div id="navbar-components" slot="menu" class="dropdown-menu">
		<a class="dropdown-item" href="./layout-horizontal.html"> Horizontal </a>
		<a class="dropdown-item" href="./layout-boxed.html">
			Boxed
			<span class="badge badge-sm bg-green text-uppercase ms-2">New</span>
		</a>
		<a class="dropdown-item" href="./layout-vertical.html"> Vertical </a>
		<a class="dropdown-item" href="./layout-vertical-transparent.html"> Vertical transparent </a>
		<a class="dropdown-item" href="./layout-vertical-right.html"> Right vertical </a>
		<a class="dropdown-item" href="./layout-condensed.html"> Condensed </a>
		<a class="dropdown-item active" href="./layout-combo.html"> Combined </a>

		<a class="dropdown-item" href="./layout-navbar-dark.html"> Navbar dark </a>
		<a class="dropdown-item" href="./layout-navbar-sticky.html"> Navbar sticky </a>
		<a class="dropdown-item" href="./layout-navbar-overlap.html"> Navbar overlap </a>
		<a class="dropdown-item" href="./layout-rtl.html"> RTL mode </a>
		<a class="dropdown-item" href="./layout-fluid.html"> Fluid </a>
		<a class="dropdown-item" href="./layout-fluid-vertical.html"> Fluid vertical </a>
	</div>
</SidebarItem> -->
<Nav>
	<Dropdown>
		<DropdownToggle>Components</DropdownToggle>
		<DropdownMenu>
			<DropdownItem icon="star" href="/components/avatars">Avatars</DropdownItem>
			<DropdownItem icon="star" href="/components/badges">Badges</DropdownItem>
			<DropdownItem icon="star" href="/components/buttons">Buttons</DropdownItem>
			<DropdownItem icon="star" href="/components/cards">Cards</DropdownItem>
		</DropdownMenu>
	</Dropdown>
	<Dropdown>
		<DropdownToggle>Common</DropdownToggle>
		<DropdownMenu>
			<DropdownItem icon="package" href="/common/if">if</DropdownItem>
			<DropdownItem icon="package" href="/common/preview">Preview</DropdownItem>
		</DropdownMenu>
	</Dropdown>
	<Dropdown>
		<DropdownToggle>Pages</DropdownToggle>
		<DropdownMenu>
			<DropdownItem icon="package" href="/components/">(TODO) Login</DropdownItem>
			<DropdownItem icon="package" href="/components/">(TODO) Signup</DropdownItem>
			<DropdownItem icon="package" href="/components/">(TODO) Dashboard</DropdownItem>
			<DropdownItem icon="package" href="/components/">(TODO) Email</DropdownItem>
		</DropdownMenu>
	</Dropdown>
</Nav>
