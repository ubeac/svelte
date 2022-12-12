<script lang="ts">
	import { Alert } from '@ubeac/svelte'
</script>

<Alert title="Wow! Everything worked!" color="success" icon="check">
	<div class="text-muted">Your account has been saved!</div>
</Alert>
<Alert title="Wow! Everything worked!" color="info" icon="info-circle">
	<div class="text-muted">Here is something that you might like to know.</div>
</Alert>
<Alert title="Wow! Everything worked!" color="warning" icon="alert-triangle">
	<div class="text-muted">Sorry! There was a problem with your request.</div>
</Alert>
<Alert title="I'm so sorry…" color="danger" icon="alert-circle">
	<div class="text-muted">Your account has been deleted and can't be restored.</div>
</Alert>
