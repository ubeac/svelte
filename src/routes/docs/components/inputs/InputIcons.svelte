<script>
	import { Button, Icon, Input } from '@ubeac/svelte'
</script>

<Input placeholder="your domain name">
	<span slot="end">
		<Icon name="search" />
	</span>
</Input>

<Input placeholder="your domain name">
	<Button tag="a" slot="end">
		<Icon name="search" />
	</Button>
</Input>

<Input placeholder="your domain name">
	<span slot="end">
		<Button tag="a">
			<Icon name="search" />
		</Button>
	</span>
</Input>
