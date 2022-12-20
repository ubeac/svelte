<script>
	import { Checkbox } from '@ubeac/svelte'
</script>

<Checkbox disabled label="HTML (disabled)" checked />
<Checkbox label="CSS" />
<Checkbox disabled label="JavaScript (disabled)" />
<Checkbox checked>
	<strong>Svelte</strong> is awesome!
</Checkbox>
