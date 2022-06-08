<script lang="ts">
	import { Badge, Button } from '@app/components'
	import { COLORS } from '@app/types'

	let href = '/'
</script>

<Badge>10</Badge>

<Badge />

<Button>
	Test
	<Badge />
</Button>
<Button>
	Test
	<Badge dot>123</Badge>
</Button>

{#each COLORS as color}
	<Badge dot {href} {color}>123</Badge>
	<Badge tile {href} {color}>123</Badge>
	<Badge round {href} {color}>123</Badge>
	<Badge overlap {href} {color}>123</Badge>
	<Badge {color} />
	<Badge {href} round outline {color}>123</Badge>
	<Badge outline {color} />
	<Badge soft {color}>123</Badge>
	<Badge soft {color} />
	<br />
{/each}

<!-- <div></div> -->
<style lang="scss" global>
	@import '../scss';
</style>
