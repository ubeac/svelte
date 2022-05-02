<script lang="ts">
	import { El } from '@app/components'
	import { condition } from '@app/utils'
</script>

{#if condition($$props)}
	<El tag="div" componentName="ButtonGroup" {...$$restProps}>
		<slot />
	</El>
{/if}
