import { posts } from '../data';

type Param = {
	slug: string;
};

export function load(arg: { params: Param }) {
	const post = posts.find((post) => post.slug === arg.params.slug);

	return {
		post
	};
}
