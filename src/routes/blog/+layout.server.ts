import { posts } from './data';

export function load(): { summaries: { slug: string; title: string }[] } {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
