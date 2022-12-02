<script>
	import { Preview } from '$lib/components'
	import ProgressDefault from './ProgressDefault.svelte'
	// import Progressdefault from './Progress.svelte'
	// import Progressdefault from './Progressdefault.svelte'
</script>

<h1>Progress bar</h1>
<p>
	Progress bars are used to provide feedback on an action status and inform users of the current progress. Although
	seemingly small interface elements, they are extremely hepful in managing users' expectations and preventing them from
	abandoning a process they have initiated.
</p>

<h2>Defaults</h2>
<p />
<Preview src="./ProgressDefault.svelte">
	<ProgressDefault />
</Preview>

<!-- <h2>Sizes</h2>
<p />
<Preview src="./StampSize.svelte">
	<StampSize />
</Preview>

<h2>Positions</h2>
<p />
<Preview src="./StampPositions.svelte">
	<StampPositions />
</Preview> -->
