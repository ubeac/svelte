<script>
	import { FormDatePicker } from '@ubeac/svelte'
</script>

<FormDatePicker readOnly label="readonly" value={new Date()} />
<FormDatePicker disabled label="disabled" value="2022/04/02" />
<FormDatePicker loading label="loading" placeholder="please wait a minute..." />
