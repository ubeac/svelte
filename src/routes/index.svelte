<script lang="ts">
	import { Alert } from '@app/components'
</script>

<Alert>this is alert</Alert>

<Alert open>this is open alert</Alert>

<Alert dismissible>
	<Alert.Title>Title</Alert.Title>
	this is dismissible alert
</Alert>

<Alert dismissible>
	<div slot="icon">icon</div>
	<Alert.Title>Title</Alert.Title>
	this is dismissible alert
</Alert>


<Alert duration={2000} dismissible>
	<div slot="icon">icon</div>
	<Alert.Title>Title</Alert.Title>
	this is dismissible alert with duration
</Alert>

<style lang="scss" global>
	@import '../scss';
</style>
