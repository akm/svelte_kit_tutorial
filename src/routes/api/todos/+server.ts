import { json, type RequestEvent } from '@sveltejs/kit';
import * as database from '$lib/server/database2';

// See https://kit.svelte.jp/docs/types#public-types-requestevent
//     https://kit.svelte.jp/docs/routing#server-receiving-data
//     https://learn.svelte.jp/tutorial/event
export async function POST(event: RequestEvent) {
	const { request, cookies } = event;
	const { description } = await request.json();
	if (!(typeof description === 'string')) throw new Error('Description not found');

	const userid = cookies.get('userid');
	if (!userid) throw new Error('User not found');
	const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}
