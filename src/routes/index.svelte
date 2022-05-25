<script lang="ts">
	import { Alert, Button, Icon } from '@app/components'
</script>

<Alert>this is alert</Alert>

<Alert open>this is open alert</Alert>

<Alert dismissible>
	<Alert.Title>Title</Alert.Title>
	this is dismissible alert
</Alert>

<Alert dismissible>
	<div slot="icon">
		<Icon name="sun" />
	</div>
	<Alert.Title>Title</Alert.Title>
	this is dismissible alert
</Alert>

<Alert icon="moon" duration={2000} dismissible>
	<Alert.Title>Title</Alert.Title>
	this is dismissible alert with duration
</Alert>

<Icon name="user" />
<Icon width="2em" height="2em" pack="mdi" name="alarm" />

<div style="padding: 1rem; display: flex; align-items: center; flex-direction: column;">
	<div>
		<Button>Button</Button>
		<Button />
		<Button block>block</Button>
		<Button icon>
			<Icon name="sun" />
		</Button>
		<Button flat>flat</Button>
		<Button color="green">green</Button>
		<Button color="secondary">secondary</Button>
		<Button tile>tile</Button>
		<Button tile flat>tile flat</Button>
		<Button color="blue" text>Text</Button>
		<Button color="blue" outline>outline</Button>
		<Button color="blue" outline tile>outline tile</Button>
		<Button color="blue" text tile>text tile</Button>
		<Button color="blue" text outline tile>text outline tile</Button>
		<Button href="/">Href</Button>
		<Button color="blue" text href="/">Href text</Button>
		<Button color="blue" outline href="/">Href outline</Button>
	</div>

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
