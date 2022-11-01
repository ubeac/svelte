<script lang="ts">
	import { browser } from '$app/environment'
	import { classname } from '$lib/utils'

	/**
	 * Set application default theme
	 */
	export let theme: 'dark' | 'light' = 'light'

	let classes: string | undefined = undefined
	let bodyClasses: string | undefined = undefined
	$: {
		classes = classname('app', [], $$props.class, true)
		bodyClasses = classname('body', { theme }, [], true)
		if (browser) document.body.className = bodyClasses ?? ''
	}
</script>

<div {...$$restProps} class={classes}>
	<slot />
</div>
