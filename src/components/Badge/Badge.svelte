<script lang="ts">
	import type { BadgeProps } from '$lib/components'

	import El from '../El/El.svelte'

	type $$Props = BadgeProps

	//#region Props

	/**
	 * Set Css Prefix for the Badge
	 */
	export let cssPrefix: $$Props['cssPrefix'] = 'badge'

	/**
	 * Set Html tag for the Badge
	 */
	export let tag: $$Props['tag'] = 'span'

	/**
	 * Set color of Badge
	 */
	export let color: $$Props['color'] = undefined

	/**
	 * Show badge as small dot. If true, default slot will be ignored.
	 */
	export let dot: $$Props['dot'] = undefined

	/**
	 * reduce background color's opacity
	 */
	export let ghost: $$Props['ghost'] = undefined

	/**
	 * Set a redirect url for badge
	 */
	export let href: $$Props['href'] = undefined

	/**
	 * Draws outlined badge
	 */
	export let outline: $$Props['outline'] = undefined

	/**
	 * You can change shape of badge to pill
	 */
	export let pill: $$Props['pill'] = undefined

	/**
	 * You can change shape of badge to square
	 */
	export let tile: $$Props['tile'] = undefined

	/**
	 * Blinking badge
	 */
	export let blink: $$Props['blink'] = undefined

	/**
	 * Badge position as notification
	 */
	export let notification: $$Props['notification'] = undefined

	//#endregion

	$: cssProps = {
		notification,
		tile,
		pill,
		outline,
		ghost,
		dot,
		color,
		blink,
	}

	$: otherProps = {
		href,
		tag: href ? 'a' : tag,
		cssPrefix,
	}
</script>

<El {...$$restProps} {cssProps} {...otherProps} tag={href ? 'a' : tag}>
	{#if !dot}
		<slot />
	{/if}
</El>
