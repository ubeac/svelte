<script>
	import { FormInput } from '@ubeac/svelte'
</script>

<FormInput readOnly label="name (readonly)" value="Your Name" />
<FormInput disabled label="username" value="your-email@gmail.com" />
<FormInput loading label="country" value="Loading..." />
