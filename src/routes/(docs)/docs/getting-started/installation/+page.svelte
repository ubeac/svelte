<div class="markdown">
	<div>
		<div class="d-flex mb-3">
			<h1 class="m-0">Installation</h1>
		</div>
		<p>
			To use ubeac components in your svelte based projects you need to install <code>@ubeac/svelte</code> npm package.
		</p>

		<div class="d-flex">
			<pre><code>npm install @ubeac/svelte</code></pre>
		</div>

		<h2>Use with SvelteKit</h2>
		<p>
			To use uBeac components in sveltekit based projects you need to import CSS styles in your root
			<code>+layout.svelte</code> file.
		</p>

		<pre><code
				>{'<!-- src/routes/+layout.ts -->'}

{'<scr' + 'ipt>'}
	import {'{'} Button {'}'} from '@ubeac/svelte';
	import '@ubeac/svelte/styles/tabler.css';
{'</script>'}
{'<Button outline color="primary">Click Me!</Button>'}
{'<slot/>'}</code></pre>

		<p>Now you are able to use uBeac components in any page or component in your project.</p>

		<h2>Use with Svelte + Vite</h2>

		<p>
			You can import styles from <code>@ubeac/svelte/styles/tabler.css</code>
			in your <code>App.svelte</code> or <code>main.js</code> file
		</p>
	</div>
</div>
