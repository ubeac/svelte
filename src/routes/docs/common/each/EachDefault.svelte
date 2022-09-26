<script>
	let items = ['zero', 'one', 'two', 'three', 'four']
</script>

<ul>
	<li each={items} let:item let:index>
		{index}: {item}
	</li>
</ul>
