<script lang="ts">
	import { Alert, Icon } from '@app/components'
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

<style lang="scss" global>
	@import '../scss';
</style>
