<script>
	import { Input } from '@ubeac/svelte'
</script>

<Input placeholder="state is not set for this" />
<Input placeholder="this is valid state" state="valid" />
<Input placeholder="this is invalid state" state="invalid" />
