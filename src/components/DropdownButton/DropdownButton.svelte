<script lang="ts">
	import { type DropdownButtonProps, El } from '$lib/components'

	type $$Props = DropdownButtonProps

	/**
	 * Set Css Prefix for the Divider
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'dropdown-button'

	/**
	 * Set color of Divider
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Set color of Divider
	 */
	export let items: $$Props['items'] = undefined

	// /**
	//  * Set alignment of Divider
	//  */
	// export let alignment: $$Props['alignment'] = undefined

	let cssProps: any = {}
	let otherProps: any = {}
	$: {
		cssProps = {
			//alignment,
			color,
		}
		otherProps = {
			cssPrefix,
		}
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps}>
	<slot />
	<El tag="ul" cssPrefix={cssPrefix + '-items'}>
		{#each items as item}
			<El tag="li" cssPrefix={cssPrefix + '-item'}>{item}</El>
		{/each}
	</El>
</El>
