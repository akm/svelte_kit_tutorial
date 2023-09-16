type Todo = {
	id: string;
	description: string;
	done: boolean;
};

const database = new Map();

export function getTodos(userid: string): Todo[] {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}

	return Array.from(database.get(userid).values());
}

export function createTodo(arg: { userid: string; description: string }) {
	const { userid, description } = arg;
	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	const todos = database.get(userid);

	const id = crypto.randomUUID();

	todos.set(id, {
		id,
		description,
		done: false
	});

	return {
		id
	};
}

export function toggleTodo(arg: { userid: string; id: string; done: boolean }) {
	const { userid, id, done } = arg;
	const todos = database.get(userid);
	todos.get(id).done = done;
}

export function deleteTodo(arg: { userid: string; id: string }) {
	const { userid, id } = arg;
	const todos = database.get(userid);
	todos.delete(id);
}
