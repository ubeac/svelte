<script>
  import "../tailwind.css";
	import "prism-themes/themes/prism-dracula.css"
	import Navbar from "../sections/Navbar.svelte";
	import Sidebar from "../sections/Sidebar.svelte";
</script>

<div class="drawer drawer-mobile">
  <input id="drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">

		<Navbar/>

		<div class="p-6">
			<slot />
		</div>
  </div>
  <div class="drawer-side">
    <label for="drawer" class="drawer-overlay" />
		<Sidebar/>
  </div>
</div>
