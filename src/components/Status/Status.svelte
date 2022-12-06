<script lang="ts">
	import { El } from '$lib/components'

	import type { StatusProps } from './Status.types'

	type $$Props = StatusProps

	export let tag: $$Props['tag'] = 'span'
	export let cssPrefix: $$Props['cssPrefix'] = 'status'

	export let color: $$Props['color'] = undefined
	export let lite: $$Props['lite'] = undefined

	$: cssProps = {
		color,
		lite,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
