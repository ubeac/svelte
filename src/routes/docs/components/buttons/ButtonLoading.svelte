<script>
	import { Button, Spinner } from '@ubeac/svelte'
</script>

<Button color="primary" loading>Button</Button>
<Button color="primary" loading>Loading button with loooong content</Button>
<Button color="primary">
	<Spinner />
	Button
</Button>
