<script>
	import { Preview } from '@ubeac/svelte'
	import RadioColors from './RadioColors.svelte'
	import RadioDefault from './RadioDefault.svelte'
	import RadioName from './RadioName.svelte'
</script>

<h1>Radio</h1>
<p>Radio components are one of the most important form elements.</p>
<Preview src="./RadioDefault.svelte">
	<RadioDefault />
</Preview>

<h2>Colors</h2>
<p>You can Change color of Radio component using <code>color</code> prop</p>
<Preview src="./RadioColors.svelte">
	<RadioColors />
</Preview>

<h2>Group multiple Radios</h2>
<p>
	You can group multiple Radios using <code>name</code> prop. We suggest you to use
	<a href="/docs/components/radio-group">RadioGroup</a> component.
</p>
<Preview vertical src="./RadioName.svelte">
	<RadioName />
</Preview>
