<div class="root">
	<div class="header">
		<div class="title" />
		<div class="actions" />
	</div>
	<div class="body" />
</div>

<style>
	div {
		margin: 1rem;
		border: dashed 2px lightgray;
	}
	div:hover {
		border: dashed 2px gray;
	}
	.root {
		margin: 50px;
	}
	.header {
		display: flex;
		justify-content: space-between;
	}
	.body {
		display: flex;
		padding: 10rem 2rem;
	}
	.title {
		padding: 1rem 2rem;
		flex-grow: 1;
	}
	.actions {
		padding: 1rem 1rem;
	}
</style>
