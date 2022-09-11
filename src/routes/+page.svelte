<script>
	import { Container, FormInput, Row } from '../components'
</script>

<a href="/docs">Documentation website</a>
<br />
<a href="https://svelte.ubeac.io/storybook">Storybook</a>

<Container>
	<Row>
		<FormInput placeholder="no label" />
		<FormInput label="With Label" placeholder="test placeholder" />
		<FormInput icon="user" label="With Icon" placeholder="test placeholder" />
		<FormInput iconEnd="user" label="With Right Icon" placeholder="test placeholder" />
		<FormInput cols="4" icon="key" iconEnd="user" label="Icons in Both side" placeholder="test placeholder" />
		<FormInput cols="4" loading label="Loading" placeholder="test placeholder" />
		<FormInput cols="4" loading icon="mail" label="Loading with icon" placeholder="test placeholder" />
	</Row>
</Container>
