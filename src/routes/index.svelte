<script lang="ts">
	import { Button } from '$lib'
	let x: any
	let y = {}
</script>

<Button on:click={(e) => console.log('btn1')} a="1" b="test1">not set</Button>
<Button on:click={() => console.log('btn')} a="2" b="test2" visible="any string">any string</Button>
<Button on:click={() => console.log('btn')} a="2" b="test2" visible={true}>true</Button>
<Button on:click={() => console.log('btn')} a="2" b="test2" visible="true">"true"</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={1}>1</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={y}>y</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={x}>x</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={y.a?.b}>false</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={false}>false</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible="false">false</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={null}>false</Button>
<Button on:click={() => console.log('btn')} a="3" b="test3" visible={0}>false</Button>
