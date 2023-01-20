<script lang="ts">
	import { El, type TabListProps } from '$lib/components'

	type $$Props = TabListProps

	//#region Props

	/**
	 * The prefix of the component CSS class
	 * @default tab-list
	 * @type string
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'tab-list'

	/**
	 * The tag of the component
	 * @default ul
	 * @type string
	 */
	export let tag: $$Props['tag'] = 'ul'

	/**
	 * Whether the tabs are pills
	 * @default undefined
	 * @type boolean
	 */
	export let pills: $$Props['pills'] = undefined

	/**
	 * Whether the tabs grow to fill the available space
	 * @default undefined
	 * @type boolean
	 */
	export let grow: $$Props['grow'] = undefined

	//#endregion

	$: cssProps = {
		pills,
		tabs: !pills,
		grow,
	}

	$: props = {
		cssPrefix,
		tag,
		role: 'tablist',
	}
</script>

<El {...$$restProps} {...props} {cssPrefix} {cssProps}>
	<slot />
</El>
