<script>
	import { Button, Icon } from '$lib/components'
	import Dropdown from './Dropdown.svelte'
	import DropdownItem from './DropdownItem.svelte'
	import DropdownMenu from './DropdownMenu.svelte'
	import DropdownToggle from './DropdownToggle.svelte'
	import Nav from './Nav.svelte'
</script>

<Nav>
	<Dropdown>
		<DropdownToggle>Components</DropdownToggle>
		<DropdownMenu>
			<DropdownItem icon="star" href="/components/autocomplete">Autocomplete</DropdownItem>
			<DropdownItem icon="star" href="/components/avatars">Avatars</DropdownItem>
			<DropdownItem icon="star" href="/components/badges">Badges</DropdownItem>
			<DropdownItem icon="star" href="/components/buttons">Buttons</DropdownItem>
			<DropdownItem icon="star" href="/components/cards">Cards</DropdownItem>
			<DropdownItem icon="star" href="/components/datepickers">DatePickers</DropdownItem>
			<DropdownItem icon="star" href="/components/grid">Grid</DropdownItem>
			<DropdownItem icon="star" href="/components/inputs">Inputs</DropdownItem>
			<DropdownItem icon="star" href="/components/select">Select</DropdownItem>
			<DropdownItem icon="star" href="/components/textarea">Textarea</DropdownItem>
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
