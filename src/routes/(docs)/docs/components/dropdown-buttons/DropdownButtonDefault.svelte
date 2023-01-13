<script lang="ts">
	import { Dropdown, DropdownColumn, DropdownColumns, DropdownItems, DropdownToggler, El } from '@ubeac/svelte'
</script>

<Dropdown>
	<DropdownToggler>
		<El>Dropdown Dropdown Dropdown Dropdown Dropdown Dropdown Dropdown Dropdown Dropdown</El>
		<El>hi</El>
	</DropdownToggler>
	<DropdownItems dropdownAlignment="end">
		<El>Action</El>
		<El>Another action</El>
		<hr />
		<El>Something else here</El>
	</DropdownItems>
</Dropdown>
<br />
<br />
<br />
<Dropdown>
	<DropdownToggler>
		<El>Dropdown</El>
		<El>hi</El>
	</DropdownToggler>
	<DropdownItems>
		<DropdownColumns>
			<DropdownColumn>
				<El>Action</El>
				<El>Another action</El>
				<El>Something else here</El>
			</DropdownColumn>
			<DropdownColumn>
				<El>Action</El>
				<El>Another action</El>
				<El>Something else here</El>
			</DropdownColumn>
		</DropdownColumns>
	</DropdownItems>
</Dropdown>
