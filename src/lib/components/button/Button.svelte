<script lang="ts">
	import { El } from '../common'
</script>

<El tag="button" {...$$restProps} on:click>
	<slot>Button</slot>
</El>
