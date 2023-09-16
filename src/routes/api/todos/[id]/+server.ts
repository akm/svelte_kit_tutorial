import * as database from '$lib/server/database2';

// TODO define a type for the params
export async function PUT({ params, request, cookies }) {
	const { done } = await request.json();
	const userid = cookies.get('userid');
	if (!userid) throw new Error('User not found');
	await database.toggleTodo({ userid, id: params.id, done });
	return new Response(null, { status: 204 });
}

// TODO define a type for the params
export async function DELETE({ params, cookies }) {
	const userid = cookies.get('userid');
	if (!userid) throw new Error('User not found');

	await database.deleteTodo({ userid, id: params.id });
	return new Response(null, { status: 204 });
}
