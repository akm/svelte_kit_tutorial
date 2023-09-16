<script type="ts">
	import { page } from '$app/stores';
	const links = [
		{path: "/", text: "home"},
		{path: "/blog", text: "blog"},
		{path: "/todos", text: "TODOs"},
		{path: "/todos2", text: "TODOs2"},
		{path: "/roll", text: "role"},
		{path: "/a/deeply/nested/route", text: "a deeply nested route"},
		{path: "/about", text: "about"},
	]
</script>

<nav>
	{#each links as link}
		<a href={link.path} aria-current={$page.url.pathname === link.path}>{link.text}</a>
	{/each}
</nav>

<slot />
