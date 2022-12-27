<script lang="ts">
	import { type DropdownBodyProps, El } from '$lib/components'

	type $$Props = DropdownBodyProps

	/**
	 * Set Css Prefix for the Divider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-body'

	let otherProps: any = {}
	$: {
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {...otherProps}>
	<slot />
</El>
