<script>
	import { Button, El, Menu } from '@ubeac/svelte'
</script>

<El>
	<Button>Menu in Bottom</Button>
	<Menu placement="bottom-start">
		<div class="dropdown-item">Item 1</div>
		<div class="dropdown-item">Item 2</div>
		<div class="dropdown-item">Item 3</div>
	</Menu>
</El>
