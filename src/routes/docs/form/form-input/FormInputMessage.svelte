<script>
	import { FormHint, FormInput } from '@ubeac/svelte'
</script>

<FormInput type="email" label="Email:">
	<FormHint slot="message">We'll never share your email with anyone else.</FormHint>
</FormInput>

<FormInput type="email" label="invalid Email:" value="test.gmail.com">
	<FormHint state="invalid" slot="message">Should be a valid email address.</FormHint>
</FormInput>

<FormInput type="email" label="valid Email:" value="test@gmail.com">
	<FormHint state="valid" slot="message">Your Email is valid.</FormHint>
</FormInput>
