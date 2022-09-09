<script>
	import { Badge, BADGE_SHAPES } from '$lib/components'

	import { COLORS } from '$lib/types'
	import Example from '../../_layout-components/Example.svelte'
</script>

<h1>Badges</h1>
<h2>Default</h2>
<p>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque natus odio, culpa expedita nulla fugit aliquid minus,
	dolores, obcaecati laborum distinctio in sequi odit! Minima omnis ullam quis dolor itaque!
</p>
<Example>
	<Badge>Text</Badge>
</Example>

<h2>Empty</h2>
<p>
	Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, earum consectetur quibusdam voluptatem voluptatum
	blanditiis nisi adipisci eum eligendi voluptates magnam sapiente, eos deserunt id numquam odio, corporis assumenda
	optio.
	<Example>
		<Badge />
	</Example>
</p>
<h2>Colors</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores non voluptatibus saepe tempora? Illum pariatur,
	suscipit natus fugiat ex laudantium corrupti a velit expedita corporis praesentium odit! Expedita, in.
</p>
<Example>
	{#each COLORS as color}
		<Badge {color}>Badge {color}</Badge>
	{/each}
</Example>

<h2>Outline</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores in a iure officia impedit animi hic praesentium
	debitis facilis. Nemo rerum assumenda earum quibusdam? Sunt temporibus ut in inventore?
</p>
<Example>
	{#each COLORS as color}
		<Badge outline {color}>{color}</Badge>
	{/each}
</Example>

<h2>Round Badges</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolores in a iure officia impedit animi hic praesentium
	debitis facilis. Nemo rerum assumenda earum quibusdam? Sunt temporibus ut in inventore?
</p>
<Example>
	{#each COLORS as color}
		<Badge shape="round" {color}>{color}</Badge>
	{/each}
</Example>

<h2>Badge Shapes</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa expedita distinctio quo rem accusamus placeat, eum iusto
	temporibus esse dolor tenetur consectetur quaerat iste id unde doloremque labore sunt nulla!
</p>
<Example>
	{#each BADGE_SHAPES as shape}
		<Badge {shape}>{shape}</Badge>
	{/each}
</Example>
