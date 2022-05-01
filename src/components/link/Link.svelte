<script lang="ts">
	import { El, link } from '@app/components'

	/**
	 * TODO
	 */
	export let to: string | undefined = undefined

	/**
	 * TODO
	 */
	export let visible: boolean = true
</script>

<El {visible}>
	<a use:link href={to} {...$$restProps}>
		<slot />
	</a>
</El>
