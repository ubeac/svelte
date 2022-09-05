<script>
	import { Icon, ICON_SIZES } from '$lib/components'
	import { COLORS } from '$lib/types'

	import Example from '../_layout-components/Example.svelte'
</script>

<h1>Icons</h1>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quae porro explicabo aliquam deleniti soluta doloremque
	doloribus. Quidem fuga, magni a illo sequi qui sint quos doloremque debitis cupiditate! Vitae?
</p>

<h2>Default</h2>
<p>
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae cumque nostrum similique nihil laudantium quasi
	dolores accusantium quos nisi eveniet tempora, nemo tenetur perspiciatis accusamus natus dolorem perferendis
	architecto aut.
</p>
<Example>
	<Icon name="user" />
</Example>

<h2>Size</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab illum labore consequatur accusamus ut eveniet eius
	asperiores, impedit placeat officia dolorem modi, maxime nostrum provident veritatis amet expedita dolores!
</p>
<Example>
	{#each ICON_SIZES as size}
		<Icon {size} name="sun" />
	{/each}
</Example>

<h2>Icon Colors</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab illum labore consequatur accusamus ut eveniet eius
	asperiores, impedit placeat officia dolorem modi, maxime nostrum provident veritatis amet expedita dolores!
</p>
<Example>
	{#each COLORS as color}
		<Icon size="3x" {color} name="book" />
	{/each}
</Example>
