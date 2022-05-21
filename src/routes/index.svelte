<script lang="ts">
	import { Button } from '@app/components'
</script>

<div style="padding: 1rem; display: flex; align-items: center; flex-direction: column;">
	<div>
		<h1>horizontal</h1>

		<Button.Group>
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>

		<h2>sizes</h2>
		<Button.Group size="sm">
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
		<Button.Group size="md">
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
		<Button.Group size="lg">
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
	</div>

	<div class="mt-2">
		<h1>vertical</h1>

		<Button.Group vertical>
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
		<h2>size</h2>
		<Button.Group size="sm" vertical>
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
		<Button.Group size="md" vertical>
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
		<Button.Group size="lg" vertical>
			<Button>First</Button>
			<Button>Second</Button>
			<Button>Last</Button>
		</Button.Group>
	</div>
</div>

<style lang="scss" global>
	@import '../scss';
</style>
