<script lang="ts">
	import { Alert, COLORS } from '@ubeac/svelte'
</script>

<Alert title="Wow! Everything worked!" color="success">
	<div class="text-muted">Your account has been saved!</div>
</Alert>
<Alert title="Wow! Everything worked!" color="info">
	<div class="text-muted">Here is something that you might like to know.</div>
</Alert>
<Alert title="Wow! Everything worked!" color="warning">
	<div class="text-muted">Sorry! There was a problem with your request.</div>
</Alert>
<Alert title="I'm so sorry…" color="danger">
	<div class="text-muted">Your account has been deleted and can't be restored.</div>
</Alert>
