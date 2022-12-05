<script>
	import { Preview } from '$lib/components'
	import ProgressDefault from './ProgressDefault.svelte'
	import ProgressIndeterminate from './ProgressIndeterminate.svelte'
	import ProgressColors from './ProgressColors.svelte'
	import ProgressSizes from './ProgressSizes.svelte'
	import ProgressStriped from './ProgressStriped.svelte'
	import ProgressStripedAnimated from './ProgressStripedAnimated.svelte'
	import ProgressLabel from './ProgressLabel.svelte'
</script>

<h1>Progress bar</h1>
<p>
	Progress bars are used to provide feedback on an action status and inform users of the current progress. Although
	seemingly small interface elements, they are extremely hepful in managing users' expectations and preventing them from
	abandoning a process they have initiated.
</p>

<h2>Default</h2>
<Preview src="./ProgressDefault.svelte">
	<ProgressDefault />
</Preview>

<h2>Colors</h2>
<p>Customize the color of the progress bar to suit your design.</p>
<Preview src="./ProgressColors.svelte">
	<ProgressColors />
</Preview>

<h2>Sizes</h2>
<p>Customize the size of the progress bar.</p>
<Preview src="./ProgressSizes.svelte">
	<ProgressSizes />
</Preview>

<h2>Indeterminate</h2>
<p>
	You can create a progress bar which shows indeterminate progress by adding <code>indeterminate</code> to the progress component.
</p>
<Preview src="./ProgressIndeterminate.svelte">
	<ProgressIndeterminate />
</Preview>

<h2>Striped progress</h2>
<p>Set striped property to show striped background</p>
<Preview src="./ProgressStriped.svelte">
	<ProgressStriped />
</Preview>

<h2>Animated striped</h2>
<p>The striped gradient can also be animated.</p>
<Preview src="./ProgressStripedAnimated.svelte">
	<ProgressStripedAnimated />
</Preview>

<h2>Labels</h2>
<p>Add labels to your progress bars by setting label property.</p>
<Preview src="./ProgressLabel.svelte">
	<ProgressLabel />
</Preview>
