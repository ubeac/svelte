<script lang="ts">
	import { Radio } from '@ubeac/svelte'

	let _for: string | undefined = undefined
</script>

<Radio name="lang3" label="HTML" checked />
<Radio name="lang3" label="CSS" />
<Radio name="lang3" label="JavaScript" />
<Radio name="lang3" bind:for={_for}>
	<label slot="label" for={_for}><strong><i>Svelte</i></strong></label>
</Radio>
<Radio name="lang3" />
