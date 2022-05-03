<script lang="ts">
	import { link } from '@app/components'
	import { condition } from '@app/utils'

	/**
	 * TODO
	 */
	export let to: string | undefined = undefined
</script>

{#if condition($$props)}
	<a use:link href={to} {...$$restProps}>
		<slot />
	</a>
{/if}
