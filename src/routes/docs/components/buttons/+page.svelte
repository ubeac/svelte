<script>
	import { Preview } from '$lib/components'

	import ButtonColors from './ButtonColors.svelte'
	import ButtonDefault from './ButtonDefault.svelte'
</script>

<h1>Buttons</h1>

<h2>Default</h2>
<p>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eligendi quaerat eveniet minus et explicabo doloribus
	dolorem dolor, tenetur voluptatibus? Accusantium, quam porro? Culpa amet sint illo sequi labore cum.
</p>
<Preview src="./ButtonDefault.svelte">
	<ButtonDefault />
</Preview>

<h2>Colors</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eos deserunt eveniet obcaecati natus voluptatum
	inventore mollitia quam harum facilis? Repellendus explicabo maxime exercitationem recusandae quo dolorem itaque at
	dignissimos.
</p>
<Preview vertical src="./ButtonColors.svelte">
	<ButtonColors />
</Preview>
