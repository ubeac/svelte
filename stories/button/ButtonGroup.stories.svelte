<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf'

	import { Button } from '../../src/components'
</script>

<Meta title="ButtonGroup" component={Button.Group} />

<Template>
	<Button.Group>
		<Button>Button</Button>
		<Button>Button</Button>
		<Button>Button</Button>
	</Button.Group>
</Template>

<Story name="default" />
