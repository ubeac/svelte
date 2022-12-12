<script lang="ts">
	import { Alert, COLORS } from '@ubeac/svelte'
</script>

<Alert dismissible filled title="Wow! Everything worked!" icon="check" color="success">
	Your account has been saved!
</Alert>
<Alert dismissible filled title="Wow! Everything worked!" icon="info-circle" color="info">
	Here is something that you might like to know.
</Alert>
<Alert dismissible filled title="Wow! Everything worked!" icon="alert-triangle" color="warning">
	Sorry! There was a problem with your request.
</Alert>
<Alert dismissible filled title="I'm so sorry…" icon="alert-circle" color="danger">
	Your account has been deleted and can't be restored.
</Alert>
