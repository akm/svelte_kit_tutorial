import * as database from '$lib/server/database2';
import type { RequestEvent } from '@sveltejs/kit';

// See https://kit.svelte.jp/docs/types#public-types-requestevent
//     https://kit.svelte.jp/docs/routing#server-receiving-data
//     https://learn.svelte.jp/tutorial/event
export async function PUT(event: RequestEvent) {
	const { params, request, cookies } = event;
	const { done } = await request.json();
	const userid = cookies.get('userid');
	if (!userid) throw new Error('User not found');
	await database.toggleTodo({ userid, id: params.id, done });
	return new Response(null, { status: 204 });
}

// See https://kit.svelte.jp/docs/types#public-types-requestevent
//     https://kit.svelte.jp/docs/routing#server-receiving-data
//     https://learn.svelte.jp/tutorial/event
export async function DELETE(event: RequestEvent) {
	const { params, cookies } = event;
	const userid = cookies.get('userid');
	if (!userid) throw new Error('User not found');

	await database.deleteTodo({ userid, id: params.id });
	return new Response(null, { status: 204 });
}
