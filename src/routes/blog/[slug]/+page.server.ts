import { error } from '@sveltejs/kit';
import { posts } from '../data';

type Param = {
	slug: string;
};

export function load(arg: { params: Param }) {
	const post = posts.find((post) => post.slug === arg.params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
