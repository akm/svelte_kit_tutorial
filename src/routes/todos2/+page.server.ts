import { getTodos, type Todo } from '$lib/server/database2';

import type { ServerLoadEvent } from '@sveltejs/kit';

export function load(event: ServerLoadEvent): { todos: Todo[] } {
	const { cookies } = event;
	let userid = cookies.get('userid');

	if (!userid) {
		userid = crypto.randomUUID();
		cookies.set('userid', userid, { path: '/' });
	}

	return {
		todos: getTodos(userid)
	};
}
