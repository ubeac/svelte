<script lang="ts">
	import { Confirm } from '$lib/components'
	import Button from '$lib/components/button/Button.svelte'

	let confirm1: any
	let confirm2: any
	let confirm3: any
	let confirm4: any
	let confirm5: any
</script>

<br />
<button on:click={() => (confirm1.open = !confirm1.open)}> toggle </button>
<Confirm title="The Internet?" description="That thing is still around?" type="error" bind:this={confirm1}>
	<Button on:click={() => (confirm1.open = false)}>OK</Button>
	<Button on:click={() => (confirm1.open = false)}>CANCEL</Button>
</Confirm>

<br />
<button on:click={() => (confirm2.open = !confirm2.open)}> toggle </button>
<Confirm title="Title" type="info" bind:this={confirm2} />

<br />
<button on:click={() => (confirm3.open = !confirm3.open)}> toggle </button>
<Confirm title="Title" type="question" bind:this={confirm3} />

<br />
<button on:click={() => (confirm4.open = !confirm4.open)}> toggle </button>
<Confirm title="Title" type="success" bind:this={confirm4} />

<br />
<button on:click={() => (confirm5.open = !confirm5.open)}> toggle </button>
<Confirm title="Title" type="warning" bind:this={confirm5} />
