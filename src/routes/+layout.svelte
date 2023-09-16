<script type="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'}>home</a>
	<a href="/blog">blog</a>
	<a href="/todos">TODOs</a>
	<a href="/todos2">TODOs2</a>
	<a href="/roll">role</a>
	<a href="/a/deeply/nested/route">a deeply nested route</a>
	<a href="/about" aria-current={$page.url.pathname === '/about'}>about</a>
</nav>

<slot />
