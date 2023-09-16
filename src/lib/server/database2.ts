type Todo = {
	id: string;
	description: string;
	done: boolean;
};

const database = new Map<string, Map<string, Todo>>();

export function getTodos(userid: string): Todo[] {
	if (!database.has(userid)) {
		createTodo({ userid, description: 'Learn about API routes' });
	}
	let todoMap = database.get(userid);
	if (!todoMap) {
		todoMap = new Map<string, Todo>();
	}

	return Array.from(todoMap.values());
}

export function createTodo(arg: { userid: string; description: string }) {
	const { userid, description } = arg;
	if (!database.has(userid)) {
		database.set(userid, new Map());
	}

	let todoMap = database.get(userid);
	if (!todoMap) {
		todoMap = new Map();
		database.set(userid, todoMap);
	}

	const id = crypto.randomUUID();

	todoMap.set(id, {
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
	const todoMap = database.get(userid);
	if (!todoMap) throw new Error('User not found');
	const todo = todoMap.get(id);
	if (!todo) throw new Error('Todo not found');
	todo.done = done;
}

export function deleteTodo(arg: { userid: string; id: string }) {
	const { userid, id } = arg;
	const todoMap = database.get(userid);
	if (!todoMap) throw new Error('User not found');
	todoMap.delete(id);
}
