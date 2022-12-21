<script lang="ts">
	import { Alert, Button, El } from '@ubeac/svelte'

	function toggle() {
		value = !value
	}
	let value = false
</script>

<El row>
	<El col mb="4">
		<Alert dismissible bind:value title="Wow! Everything worked!" color="success">
			<div class="text-muted">Your account has been saved!</div>
		</Alert>
	</El>
</El>
<El row>
	<El col>
		<Button on:click={toggle}>Toggle</Button>
	</El>
</El>
