<script>
	import { Alert, AlertTitle, Avatar, Button, ButtonGroup, Icon } from '$lib/components'
	import AlertActions from '$lib/components/alert/AlertActions.svelte'
	import { COLORS } from '$lib/types'

	import Example from '../_layout-components/Example.svelte'
</script>

<h1>Alert</h1>

<h1>Default</h1>
<p>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquam, veritatis voluptatem fuga recusandae nisi
	earum voluptas asperiores architecto quidem, magnam delectus! Quae et facere, hic unde iure voluptatem sit.
</p>

<Example>
	<Alert title="This is Alert title">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nemo fugiat eos? Cumque quod odit omnis
		voluptates necessitatibus non aut beatae provident corrupti reiciendis. Dolorem voluptatibus facilis eveniet soluta.
		Quidem.
	</Alert>
</Example>

<h2>AlertTitle</h2>
<p>You can use <code>AlertTitle</code> component instead of title prop</p>

<Example>
	<Alert>
		<AlertTitle>This is title</AlertTitle>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius voluptatibus atque repudiandae maiores beatae at
			iste cum eligendi, amet possimus quas praesentium, optio illo dolores. Doloribus suscipit corrupti ab aliquam.
		</p>
	</Alert>
</Example>

<h2>Alert With duration</h2>

<Example>
	<div class="example-alerts">
		<Alert dismissible duration={5000} icon="check" color="success" title="Alert with duration=5000">
			I will close after 5 seconds
		</Alert>
	</div>
</Example>

<h2>Dismissible Alerts</h2>

<Example>
	<div class="example-alerts">
		<Alert dismissible icon="check" color="success" title="Wow! Everything worked!">Your account has been saved!</Alert>

		<Alert dismissible icon="info-circle" color="info" title="Did you know?"
			>Here is something that you might like to know.</Alert>

		<Alert dismissible icon="alert-triangle" color="warning" title="Uh on, something went wrong">
			Sorry! There was a problem with your request.
		</Alert>

		<Alert dismissible icon="alert-circle" color="danger" title="I'm so sorry&hellip;">
			Your account has been deleted and can't be restored.
		</Alert>
	</div>
</Example>

<h2>Alert Colors</h2>

<Example>
	<div class="example-alerts">
		{#each COLORS as color}
			<Alert {color}>
				<AlertTitle>This is {color} Alert</AlertTitle>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quidem iusto, commodi
			</Alert>
		{/each}
	</div>
</Example>

<h2>Alert Icons</h2>

<Example>
	<div class="example-alerts">
		<Alert icon="check" color="success" title="Wow! Everything worked!">Your account has been saved!</Alert>

		<Alert icon="info-circle" color="info" title="Did you know?">Here is something that you might like to know.</Alert>

		<Alert icon="alert-triangle" color="warning" title="Uh on, something went wrong">
			Sorry! There was a problem with your request.
		</Alert>

		<Alert icon="alert-circle" color="danger" title="I'm so sorry&hellip;">
			Your account has been deleted and can't be restored.
		</Alert>
	</div>
</Example>

<h2>Ghost Alert</h2>

<Example>
	<div class="example-alerts">
		<Alert variant="ghost" icon="check" color="success" title="Wow! Everything worked!"
			>Your account has been saved!</Alert>

		<Alert variant="ghost" icon="info-circle" color="info" title="Did you know?"
			>Here is something that you might like to know.</Alert>

		<Alert variant="ghost" icon="alert-triangle" color="warning" title="Uh on, something went wrong">
			Sorry! There was a problem with your request.
		</Alert>

		<Alert variant="ghost" icon="alert-circle" color="danger" title="I'm so sorry&hellip;">
			Your account has been deleted and can't be restored.
		</Alert>
	</div>
</Example>

<h2>Filled Alerts</h2>
<Example>
	<div class="example-alerts">
		<Alert variant="filled" icon="check" color="success" title="Wow! Everything worked!"
			>Your account has been saved!</Alert>

		<Alert variant="filled" icon="info-circle" color="info" title="Did you know?"
			>Here is something that you might like to know.</Alert>

		<Alert variant="filled" icon="alert-triangle" color="warning" title="Uh on, something went wrong">
			Sorry! There was a problem with your request.
		</Alert>

		<Alert variant="filled" icon="alert-circle" color="danger" title="I'm so sorry&hellip;">
			Your account has been deleted and can't be restored.
		</Alert>
	</div>
</Example>

<h2>Alert with Actions</h2>
<Example>
	<div class="example-alerts">
		<Alert icon="check" color="success" title="Wow! Everything worked!">
			<p>Your account has been saved!</p>
			<AlertActions>
				<Button>Cancel</Button>
				<Button color="success">Ok</Button>
			</AlertActions>
		</Alert>

		<Alert icon="info-circle" color="info" title="Did you know?">
			Here is something that you might like to know.
			<AlertActions>
				<Button>Cancel</Button>
				<Button color="info">Ok</Button>
			</AlertActions>
		</Alert>

		<Alert color="warning" title="Uh on, something went wrong (no icon)">
			Sorry! There was a problem with your request.
			<AlertActions>
				<Button>Cancel</Button>
				<Button color="warning">Ok</Button>
			</AlertActions>
		</Alert>

		<Alert color="danger" title="I'm so sorry&hellip; (no icon)">
			Your account has been deleted and can't be restored.
			<AlertActions>
				<Button>Cancel</Button>
				<Button color="danger">Ok</Button>
			</AlertActions>
		</Alert>
	</div>
</Example>

<h2>Alert with Avatar</h2>
<Example>
	<div class="example-alerts">
		<Alert color="success" title="Wow! Everything worked!">
			<Avatar color="success" slot="start">AV</Avatar>
			<p>Your account has been saved!</p>
			<AlertActions>
				<Button>Cancel</Button>
				<Button color="success">Ok</Button>
			</AlertActions>
		</Alert>

		<Alert color="info" dismissible title="Did you know?">
			<Avatar color="info" slot="start">AV</Avatar>
			Here is something that you might like to know.
			<AlertActions>
				<Button>Cancel</Button>
				<Button color="info">Ok</Button>
			</AlertActions>
		</Alert>

		<Alert color="warning" title="Uh on, something went wrong (no icon)">
			<Avatar color="warning" slot="start">TE</Avatar>
			Sorry! There was a problem with your request.
		</Alert>

		<Alert color="danger" title="I'm so sorry&hellip; (no icon)">
			<Avatar color="danger" slot="start">AV</Avatar>
			Your account has been deleted and can't be restored.
		</Alert>
	</div>
</Example>

<h2>Alert built with Components</h2>

<Example>
	<Alert color="primary">
		<Icon slot="icon" size="2x" name="package" />
		<AlertTitle>AlertTitle component</AlertTitle>
		This is body of the Alert
		<AlertActions>
			<Button>Left</Button>
			<Button color="primary">Right</Button>
		</AlertActions>
	</Alert>
</Example>

<h2>Open / Close Alerts</h2>

<Example>
	<div class="example-alerts">
		<Alert open color="primary">
			<Icon slot="icon" size="2x" name="package" />
			<AlertTitle>Open = true</AlertTitle>
			This is body of the Alert
			<AlertActions>
				<Button>Left</Button>
				<Button color="primary">Right</Button>
			</AlertActions>
		</Alert>

		<Alert open={false} color="primary">
			<Icon slot="icon" size="2x" name="package" />
			<AlertTitle>Open = false</AlertTitle>
			This is body of the Alert
			<AlertActions>
				<Button>Left</Button>
				<Button color="primary">Right</Button>
			</AlertActions>
		</Alert>
	</div>
</Example>

<style>
	.example-alerts {
		display: flex;
		flex-direction: column;
	}
</style>
