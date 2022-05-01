<script lang="ts">
	import Icon from '@iconify/svelte'

	import type { Colors } from '@app/types'
	import { classname } from '@app/utils'

	/**
	 * TODO
	 */
	let klass: string | undefined = undefined
	export { klass as class }

	/**
	 * TODO
	 */
	export let color: Colors = undefined

	/**
	 * TODO
	 */
	export let name: string | undefined = undefined

	/**
	 * TODO
	 */
	export let pack: 'tabler' = 'tabler'

	/**
	 * TODO
	 */
	export let size:
		| 'auto'
		| 'xs'
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '1x'
		| '2x'
		| '3x'
		| '4x'
		| '5x'
		| '6x'
		| '7x'
		| '8x'
		| '9x' = 'auto'

	$: classes = classname(
		'icon',
		{
			size,
			[`$text-${color}`]: !!color,
		},
		klass
	)
</script>

<Icon class={classes} icon="{pack}:{name}" {...$$restProps} />

<!-- TODO -->
<style lang="scss" global>
	@import '../../scss';
</style>
