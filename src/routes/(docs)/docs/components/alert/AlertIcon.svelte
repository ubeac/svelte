<script lang="ts">
	import { Alert, El } from '@ubeac/svelte'
</script>

<Alert title="Wow! Everything worked!" color="success" icon="check">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Alert title="Wow! Everything worked!" color="info" icon="info-circle">
	<El textMuted>Here is something that you might like to know.</El>
</Alert>
<Alert title="Wow! Everything worked!" color="warning" icon="alert-triangle">
	<El textMuted>Sorry! There was a problem with your request.</El>
</Alert>
<Alert title="I'm so sorry…" color="danger" icon="alert-circle">
	<El textMuted>Your account has been deleted and can't be restored.</El>
</Alert>
