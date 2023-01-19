<script lang="ts">
	import { El } from '$lib'
	import type { LabelProps } from '$lib'

	type $$Props = LabelProps

	export let tag: $$Props['tag'] = 'label'
	export let cssPrefix: $$Props['cssPrefix'] = 'label'

	export let required: $$Props['required'] = false

	let fore: $$Props['for'] = undefined
	export { fore as for }

	$: cssProps = {
		required,
	}

	$: otherProps = {
		tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} for={fore} {cssProps} {...otherProps}>
	<slot />
</El>
