<script>
	import { Textarea } from '@ubeac/svelte'

	let value =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,' +
		'at debitis iusto aliquid suscipit quibusdam impedit deserunt et? Architecto' +
		' dolores dolor vero eius nihil nostrum ea nobis tempora. Facere, cumque.'
</script>

<Textarea readOnly bind:value />

<p if={value.length > 0}>{value}</p>
