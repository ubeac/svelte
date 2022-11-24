<script lang="ts">
	import { El } from '../Base'
	import type { BadgeProps } from './Badge.types'

	type $$Props = BadgeProps

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
	export let dot: $$Props['dot'] = false

	/**
	 * reduce background color's opacity
	 */
	export let ghost: $$Props['ghost'] = false

	/**
	 * Set a redirect url for badge
	 */
	export let href: $$Props['href'] = undefined

	/**
	 * Draws outlined badge
	 */
	export let outline: $$Props['outline'] = false

	/**
	 * You can change shape of badge using round property
	 */
	export let shape: $$Props['shape'] = 'default'

	/**
	 * Blinking badge
	 */
	export let blink: $$Props['blink'] = false

	/**
	 * Badge position as notification
	 */
	export let notification: $$Props['notification'] = false

	$: cssProps = {
		notification,
		shape,
		outline,
		ghost,
		dot,
		color,
		blink,
	}
	$: otherProps = { href, tag, cssPrefix }
</script>

<El this={href ? 'a' : 'span'} {...$$restProps} {cssProps} {...otherProps}>
	{#if !dot}
		<slot />
	{/if}
</El>
