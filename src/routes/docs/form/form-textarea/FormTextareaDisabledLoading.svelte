<script>
	import { FormTextarea } from '@ubeac/svelte'
</script>

<FormTextarea readOnly label="readonly" value="This is readonly textarea" />
<FormTextarea disabled label="disabled" value="And this is disabled" />
<FormTextarea loading label="loading" placeholder="please wait a minute..." />
