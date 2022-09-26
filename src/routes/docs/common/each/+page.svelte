<script>
	import { Preview } from '@ubeac/svelte/components'
	import EachComponents from './EachComponents.svelte'
	import EachDefault from './EachDefault.svelte'
	import EachDestructure from './EachDestructure.svelte'
	import EachKeyed from './EachKeyed.svelte'
	import EachRename from './EachRename.svelte'
</script>

E
<h1>Each prop</h1>
<p>
	<code>each</code> prop is used to replace <code>{'{'} #each ...{'}'}</code> blocks in svelte. type of
	<code>each</code> should be Array.
</p>
<p>then you can use <code>let:item</code> and <code>let:index</code> to have access to current item and index.</p>

<h2>Installation</h2>
<p>You should add each Preprocessor in your <code>svelte.config.js</code> file.</p>
<pre>
    import eachProcess from '@ubeac/svelte/preprocessors/each.js'

    const config = {'{'}
        preprocess: [
            eachPreprocess(),
            // ...
        ]
        // ...
    {'}'}

    export default config;
</pre>

<h2>Example</h2>
<p>Here is a basic example.</p>
<Preview src="./EachDefault.svelte">
	<EachDefault />
</Preview>

<h2>Rename item and index</h2>
<p>You can rename <code>item</code> and <code>index</code> to avoid name conflicts.</p>
<Preview src="./EachRename.svelte">
	<EachRename />
</Preview>
<p class="mb-0 mt-3">above code is equivalent to:</p>

<pre>{`<ul>
    {#each items as asText, asNumber}
        <li>{asNumber}: {asText}</li>
    {/each}
</ul>`}</pre>

<h2>Keys</h2>
<p>You can also have keyed-each loops by inserting key inside parenthesis<code>(...)</code></p>
<Preview src="./EachKeyed.svelte">
	<EachKeyed />
</Preview>

<h2>Components</h2>
<p>All Svelte components supports <code>each</code> prop</p>
<Preview src="./EachComponents.svelte">
	<EachComponents />
</Preview>

<h2>Destructure Item Object</h2>
<p>As you can see in above example, you can also destructure item object</p>
<Preview src="./EachDestructure.svelte">
	<EachDestructure />
</Preview>
