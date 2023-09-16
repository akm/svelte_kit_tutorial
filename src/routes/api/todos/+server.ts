import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database2';

export async function POST({ request, cookies }) {
	const { description } = await request.json();
	if (!(typeof description === 'string')) throw new Error('Description not found');

	const userid = cookies.get('userid');
	if (!userid) throw new Error('User not found');
	const { id } = await database.createTodo({ userid, description });

	return json({ id }, { status: 201 });
}
