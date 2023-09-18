<script type="ts">
	import { page, navigating, updated } from '$app/stores';
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
		new Link("/errors/expected", "expected"),
		new Link("/errors/unexpected", "unexpected"),
		new Link("/redirects/a", "redirects a"),
		new Link("/redirects/b", "redirects b"),
		new Link("/ping", "ping"),
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

{#if $updated}
	<p class="toast">
		A new version of the app is available

		<button on:click={() => location.reload()}>
			reload the page
		</button>
	</p>
{/if}
