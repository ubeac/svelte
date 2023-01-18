<script lang="ts">
	import { El, type StatusProps } from '$lib/components/index.js'

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
