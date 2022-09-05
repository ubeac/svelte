<script>
	import { Badge } from '$lib/components'

	import { COLORS } from '$lib/types'
</script>

<h1>Badges</h1>

{#each COLORS as color}
	<Badge {color}>Badge {color}</Badge>
{/each}
