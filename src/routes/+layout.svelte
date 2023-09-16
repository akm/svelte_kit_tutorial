<script type="ts">
	import { page } from '$app/stores';
	import { Link } from './+layout/link';

	const links = [
		new Link("/", "home"),
		new Link("/blog", "blog", true),
		new Link("/todos", "TODOs"),
		new Link("/todos2", "TODOs2"),
		new Link("/roll", "role"),
		new Link("/a/deeply/nested/route", "a deeply nested route"),
		new Link("/about", "about"),
	]
</script>

<nav>
	{#each links as link}
		<a href={link.path} aria-current={link.match($page.url.pathname)}>{link.text}</a>
	{/each}
</nav>

<slot />
