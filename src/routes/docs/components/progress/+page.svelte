<script>
	import { Preview } from '$lib/components'
	import ProgressDefault from './ProgressDefault.svelte'
	import ProgressIndeterminate from './ProgressIndeterminate.svelte'
	import ProgressColors from './ProgressColors.svelte'
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

<h2>Indeterminate</h2>
<p>
	You can create a progress bar which shows indeterminate progress by adding <code>indeterminate</code> to the progress component.
</p>
<Preview src="./ProgressIndeterminate.svelte">
	<ProgressIndeterminate />
</Preview>

<h2>Collors</h2>
<p>Customize the color of the progress bar to suit your design.</p>
<Preview src="./ProgressColors.svelte">
	<ProgressColors />
</Preview>
