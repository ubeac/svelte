<script>
	import { Preview } from '$lib/components/index.js'
	import IfNative from './IfNative.svelte'
	import IfComponents from './IfComponents.svelte'
	import IfMultiline from './IfMultiline.svelte'
</script>

<h1>If prop</h1>
You can show or hide a Component/Element using if prop, it works on all Components and DOM Elements

<h2>Using with Components</h2>
<p>
	You can use if prop in all components whether it is from @ubeac/svelte or other libraries or even your own component
	:)
</p>

<Preview src="./IfComponents.svelte">
	<div class="example-if">
		<IfComponents />
	</div>
</Preview>

<h2>Using with DOM Elements</h2>
<p>You can also use it with all native HTML elements</p>

<Preview src="./IfNative.svelte">
	<div class="example-if">
		<IfNative />
	</div>
</Preview>

<h2>Use alongside other props</h2>
<p>you can also use it alongside other props (multiline)</p>

<Preview src="./IfMultiline.svelte">
	<div class="example-if">
		<IfMultiline />
	</div>
</Preview>

<style>
	h2 {
		margin-top: 2rem;
	}

	.example-if {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
</style>
