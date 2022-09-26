<script>
	let items = ['zero', 'one', 'two', 'three', 'four']
</script>

<ul>
	<li each={items} let:item={asText} let:index={asNumber}>
		{asNumber}: {asText}
	</li>
</ul>
