<script>
	import { FormInput, Icon, Spinner } from '@ubeac/svelte'
</script>

<FormInput placeholder="Enter your name" icon="user" label="Name" />
<FormInput placeholder="Enter your email address" icon="mail" label="Email" />
<FormInput placeholder="Enter your password" icon="key" label="Password" />
<FormInput label="Icon right" iconEnd="package" />

<FormInput placeholder="You can set icons in both side" label="Both" icon="package" iconEnd="check" />
