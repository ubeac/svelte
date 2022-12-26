<script>
	import { Doc, Preview } from '$lib/components/index.js'
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

<Doc title="Default">
	<!--  -->
</Doc>
<Preview src="./ProgressDefault.svelte">
	<ProgressDefault />
</Preview>

<Doc title="Colors">Customize the color of the progress bar to suit your design.</Doc>

<Preview src="./ProgressColors.svelte">
	<ProgressColors />
</Preview>

<Doc title="Sizes">Customize the size of the progress bar.</Doc>
<Preview src="./ProgressSizes.svelte">
	<ProgressSizes />
</Preview>

<Doc title="Indeterminate">
	You can create a progress bar which shows indeterminate progress by adding <code>indeterminate</code> to the progress component.
</Doc>
<Preview src="./ProgressIndeterminate.svelte">
	<ProgressIndeterminate />
</Preview>

<Doc title="Striped progress">Set striped property to show striped background</Doc>
<Preview src="./ProgressStriped.svelte">
	<ProgressStriped />
</Preview>

<Doc title="Animated striped">The striped gradient can also be animated.</Doc>
<Preview src="./ProgressStripedAnimated.svelte">
	<ProgressStripedAnimated />
</Preview>

<Doc title="Labels">Add labels to your progress bars by setting label property.</Doc>
<Preview src="./ProgressLabel.svelte">
	<ProgressLabel />
</Preview>
