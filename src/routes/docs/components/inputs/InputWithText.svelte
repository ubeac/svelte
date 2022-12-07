<script>
	import { Input } from '@ubeac/svelte'
</script>

<Input placeholder="your domain name" size="sm">
	<span slot="start">https://www.</span>
	<span slot="end">.com</span>
</Input>

<Input placeholder="your domain name">
	<span slot="start">https://www.</span>
	<span slot="end">.com</span>
</Input>

<Input placeholder="your domain name" size="lg">
	<span slot="start">https://www.</span>
	<span slot="end">.com</span>
</Input>
