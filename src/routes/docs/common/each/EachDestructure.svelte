<script lang="ts">
	let items = [
		{ name: 'Red', color: 'red', hex: '#ff0000' },
		{ name: 'Green', color: 'green', hex: '#00ff00' },
		{ name: 'Blue', color: 'blue', hex: '#0000ff' },
		{ name: 'Black', color: 'black', hex: '#000000' },
	]

	interface $$Slots {
		default: {
			item: any
			index: number
		}
	}
</script>

<ul>
	<li each={items} let:item={{ name, color, hex }}>
		NAME: {name} ----- COLOR: {color} ------ HEX: {hex}
	</li>
</ul>
