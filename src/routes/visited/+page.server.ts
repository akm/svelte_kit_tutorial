import type { ServerLoadEvent } from '@sveltejs/kit';

export function load(event: ServerLoadEvent): { visited: string | undefined } {
	const { cookies } = event;
	const visited = cookies.get('visited');

	cookies.set('visited', 'true', { path: '/' });

	return {
		visited
	};
}
