<script lang="ts">
	import { El } from '../el'
	import { link } from '../router'

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
