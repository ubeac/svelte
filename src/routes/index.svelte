<script>
	import { Breadcrumb, BreadcrumbItem } from '$lib/components'
</script>

<Breadcrumb>
	<BreadcrumbItem>Home</BreadcrumbItem>
	<BreadcrumbItem>page 1</BreadcrumbItem>
	<BreadcrumbItem active>Page 2</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb separator="dots">
	<BreadcrumbItem>Home</BreadcrumbItem>
	<BreadcrumbItem>page 1</BreadcrumbItem>
	<BreadcrumbItem active>Page 2</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb separator="arrows">
	<BreadcrumbItem href="/">Home</BreadcrumbItem>
	<BreadcrumbItem href="/">page 1</BreadcrumbItem>
	<BreadcrumbItem href="/" active>Page 2</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb separator="bullets">
	<BreadcrumbItem>Home</BreadcrumbItem>
	<BreadcrumbItem>page 1</BreadcrumbItem>
	<BreadcrumbItem active>Page 2</BreadcrumbItem>
</Breadcrumb>
