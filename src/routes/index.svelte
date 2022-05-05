<script lang="ts">
	import { Button } from '@app/components'
</script>

<Button loading>loading</Button>
<Button color="red">red</Button>
<Button outline color="red">outline</Button>
<Button disabled>disabled</Button>
<Button block>block</Button>
<Button size="lg">lg</Button>
<Button
	on:click={(event) => console.log('on:click', event)}
	on:mousemove={() => console.log('on:mousemove')}
	on:sMUIDialog:closed.passive={() => console.log('on:click')}>
	Test1
</Button>
