<script type="ts">
	import { page, navigating } from '$app/stores';
	import { Link } from './+layout/link';

	const links = [
		new Link("/", "home"),
		new Link("/blog", "blog", true),
		new Link("/todos", "TODOs"),
		new Link("/todos2", "TODOs2"),
		new Link("/roll", "role"),
		new Link("/a/deeply/nested/route", "a deeply nested route"),
		new Link("/about", "about"),
		new Link("/visited", "visited"),
	]
</script>

<nav>
	{#each links as link}
		<a href={link.path} aria-current={link.match($page.url.pathname)}>{link.text}</a>
	{/each}

	{#if $navigating}
		navigating to {$navigating.to.url.pathname}
	{/if}	
</nav>

<slot />
