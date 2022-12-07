<script>
	import { Button, Popover, PopoverBody, PopoverHeader } from '@ubeac/svelte'
</script>

<Button size="lg" color="danger">Click to trigger popover</Button>

<Popover trigger="click">
	<PopoverHeader>Popover title</PopoverHeader>
	<PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
</Popover>
