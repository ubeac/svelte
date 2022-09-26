<script>
	const items = [
		{ id: 'xscda', name: 'User 1', email: 'user1@gmail.com' },
		{ id: 'sdfev', name: 'User 2', email: 'user2@gmail.com' },
		{ id: 'fsdtd', name: 'User 3', email: 'user3@gmail.com' },
		{ id: 'sqwcv', name: 'User 4', email: 'user4@gmail.com' },
		{ id: 'kjijh', name: 'User 5', email: 'user5@gmail.com' },
		{ id: 'xcvud', name: 'User 6', email: 'user6@gmail.com' },
		{ id: 'jkbij', name: 'User 7', email: 'user7@gmail.com' },
		{ id: 'fiiuj', name: 'User 8', email: 'user8@gmail.com' },
		{ id: 'cvuid', name: 'User 9', email: 'user9@gmail.com' },
	]
</script>

<div each={items} let:item (item.id)>
	{item.name} - {item.email}
</div>
