<script lang="ts">
	import { Alert, COLORS } from '@ubeac/svelte'
</script>

<Alert dismissible variant="filled" title="Wow! Everything worked!" icon="check" color="success">
	<p>Your account has been saved!</p>
</Alert>
<Alert dismissible variant="filled" title="Wow! Everything worked!" icon="info-circle" color="info">
	<p>Here is something that you might like to know.</p>
</Alert>
<Alert dismissible variant="filled" title="Wow! Everything worked!" icon="alert-triangle" color="warning">
	<p>Sorry! There was a problem with your request.</p>
</Alert>
<Alert dismissible variant="filled" title="I'm so sorry…" icon="alert-circle" color="danger">
	<p>Your account has been deleted and can't be restored.</p>
</Alert>
