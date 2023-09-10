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

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		const userID = cookies.get('userid');
		const description = data.get('description');
		if (!userID) throw new Error('User not found');
		if (!description) throw new Error('Description not found');
		db.createTodo(userID, description.toString());
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		const userID = cookies.get('userid');
		const id = data.get('id');
		if (!userID) throw new Error('User not found');
		if (!id) throw new Error('id not found');
		db.deleteTodo(userID, id.toString());
	}
};
