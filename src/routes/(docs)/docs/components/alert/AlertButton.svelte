<script lang="ts">
	import { Alert, Button, ButtonGroup } from '@ubeac/svelte'
</script>

<Alert dismissible title="Wow! Everything worked!" color="success">
	<p>Your account has been saved!</p>
	<ButtonGroup>
		<Button color="success">Okay</Button>
		<Button outline>Cancel</Button>
	</ButtonGroup>
</Alert>
<Alert dismissible title="Wow! Everything worked!" color="info">
	<p>Here is something that you might like to know.</p>
	<ButtonGroup>
		<Button color="info">Okay</Button>
		<Button outline>Cancel</Button>
	</ButtonGroup>
</Alert>
<Alert dismissible title="Wow! Everything worked!" color="warning">
	<p>Sorry! There was a problem with your request.</p>
	<ButtonGroup>
		<Button color="warning">Okay</Button>
		<Button outline>Cancel</Button>
	</ButtonGroup>
</Alert>
<Alert dismissible title="I'm so sorry…" color="danger">
	<p>Your account has been deleted and can't be restored.</p>
	<ButtonGroup>
		<Button color="danger">Okay</Button>
		<Button outline>Cancel</Button>
	</ButtonGroup>
</Alert>
