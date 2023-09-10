import * as db from '$lib/server/database';
import type { Cookies } from '@sveltejs/kit';

export function load(arg: { cookies: Cookies }) {
	let id = arg.cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		arg.cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id) ?? []
	};
}
