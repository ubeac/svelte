<script lang="ts">
	import { El, Icon, type StampProps } from '$lib/index.js'


	type $$Props = StampProps

	export let cssPrefix: $$Props['cssPrefix'] = 'stamp'
	/**
	 * You can use color property to change the stamp's background color
	 */
	export let bgColor: $$Props['bgColor'] = undefined

	/**
	 * You can use text color property to change the stamp's border color
	 */
	export let textColor: $$Props['textColor'] = undefined

	/**
	 * You can set position of the stamp using position property
	 */
	export let iconPosition: $$Props['iconPosition'] = undefined

	/**
	 * If you want to change size of the stamp, use size property
	 */
	export let size: $$Props['size'] = 'md'

	/**
	 * You can set the stamp icon using icon property
	 */
	export let icon: $$Props['icon'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			size,
			iconPosition,
			bgColor,
			textColor,
		}
		otherProps = {
			cssPrefix,
			icon,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<Icon name={icon} />
</El>
