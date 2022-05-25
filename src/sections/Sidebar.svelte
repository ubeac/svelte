<script>
  import { page } from '$app/stores';
</script>

<div class="overflow-y-auto w-80 bg-base-100 border-r border-base-content/10">
  <div class="navbar border-b border-transparent">
    <div class="flex-1 px-4">
      <a href="/" class="font-bold text-sm flex gap-2 items-center">
        <img src="https://avatars.githubusercontent.com/u/38079294?s=200&v=4" class="w-8 h-8 rounded" alt="uBeac" />
        uBeac Svelte Components
      </a>
    </div>
  </div>
  <ul class="menu p-4">
    <li class="menu-title">
      <span>Getting Started</span>
    </li>
    <li>
      <a href="/install" class:active="{$page.url.pathname === '/install'}">
        Install
      </a>
    </li>
    <li>
      <a href="/release-notes" class:active="{$page.url.pathname === '/release-notes'}">
        Release Notes
      </a>
    </li>
    <li class="menu-title">
      <span>Components</span>
    </li>
    <li>
      <a href="/button" class:active="{$page.url.pathname === '/button'}">
        Button
      </a>
  </ul>
</div>