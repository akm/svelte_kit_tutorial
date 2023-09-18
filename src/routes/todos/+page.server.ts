import { getTodos, createTodo, deleteTodo, type Todo } from '$lib/server/database';
import type { RequestEvent, ServerLoadEvent } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

export function load(event: ServerLoadEvent): { todos: Todo[] } {
	const { cookies } = event;
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: getTodos(id) ?? []
	};
}

export const actions = {
	// https://kit.svelte.jp/docs/types#public-types-action
	// https://kit.svelte.jp/docs/form-actions#anatomy-of-an-action
	// https://learn.svelte.jp/tutorial/event
	create: async (event: RequestEvent) => {
		const { cookies, request } = event;
		await new Promise((fulfil) => setTimeout(fulfil, 1000)); // artificial delay
		const data = await request.formData();
		const userID = cookies.get('userid');
		const description = data.get('description');
		if (!userID) throw new Error('User not found');
		if (!description) throw new Error('Description not found');
		try {
			createTodo(userID, description.toString());
		} catch (err: unknown) {
			if (err instanceof Error) {
				return fail(422, {
					description: description,
					error: err.message
				});
			} else {
				throw err;
			}
		}
	},

	// https://kit.svelte.jp/docs/types#public-types-action
	// https://kit.svelte.jp/docs/form-actions#anatomy-of-an-action
	// https://learn.svelte.jp/tutorial/event
	delete: async (event: RequestEvent) => {
		const { cookies, request } = event;
		await new Promise((fulfil) => setTimeout(fulfil, 1000)); // artificial delay
		const data = await request.formData();
		const userID = cookies.get('userid');
		const id = data.get('id');
		if (!userID) throw new Error('User not found');
		if (!id) throw new Error('id not found');
		deleteTodo(userID, id.toString());
	}
};
