<script lang="ts">
	import { Alert, Button, El } from '@ubeac/svelte'

	function toggle() {
		value = !value
	}
	let value = false
</script>

<Alert dismissible bind:value title="Wow! Everything worked!" color="success">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Button on:click={toggle}>Toggle Alert</Button>
