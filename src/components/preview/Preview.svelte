<script lang="ts">
	import { Card } from '../card'
	import CardBody from '../card/CardBody.svelte'
	import { Divider } from '../divider'

	export let markup: string | undefined = undefined
	export let script: string | undefined = undefined
	export let style: string | undefined = undefined
</script>

<Card>
	<CardBody>
		<slot />
		<Divider if={markup}>Markup</Divider>
		<pre if={markup}><code>{markup}</code></pre>

		<Divider if={script}>Script</Divider>
		<pre if={script}><code>{script}</code></pre>

		<Divider if={style}>Style</Divider>
		<pre if={style}><code>{style}</code></pre>
	</CardBody>
</Card>
