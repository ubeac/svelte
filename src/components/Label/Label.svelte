<script lang="ts">
	import { El } from '$lib/components'

	import type { LabelProps } from './Label.types'

	type $$Props = LabelProps

	export let tag: $$Props['tag'] = 'label'
	export let cssPrefix: $$Props['cssPrefix'] = 'label'

	export let required: $$Props['required'] = false

	$: cssProps = {
		required,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
</El>
