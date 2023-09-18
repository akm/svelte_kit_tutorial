import { error, type ServerLoadEvent } from '@sveltejs/kit';
import { posts, type Post } from '../data';

export function load(event: ServerLoadEvent): { post: Post } {
	const { params } = event;
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
