<script>
	let items = ['red', 'blue', 'green', 'white', 'black', 'yellow']
</script>

<a href="/docs">Documentation website</a>
<br />
<a href="https://svelte.ubeac.io/storybook">Storybook</a>

<ul>
	<li if={true} each={items} let:item let:index (item)>
		{index} - {item}
	</li>
</ul>
