<script lang="ts">
	import { FormInput, Input } from '@app/components'
</script>

<Input />
<br />
<Input type="password" />
<br />
<FormInput />
<FormInput type="password" />
<FormInput value="Value" />
<FormInput value="Value" label="Label" required />
<FormInput value="Value" label="Label" />
<FormInput value="Value" preview />
<FormInput value="Value" label="Label" preview />
<FormInput icon="user" />
<FormInput icon="user" disabled />
<FormInput icon="user" disabled value="Value" />
<FormInput icon="user" readonly />
<FormInput icon="user" readonly value="Value" />
<FormInput icon="user" placeholder="placeholder" />
<FormInput icon="user" placeholder="placeholder" value="Value" />
<FormInput icon="user" label="Label" />
<FormInput icon="user" label="Label" loading />

<style lang="scss" global>
	@import '../scss';
</style>
