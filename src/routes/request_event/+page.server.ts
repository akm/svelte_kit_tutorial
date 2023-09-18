import type { ServerLoadEvent } from '@sveltejs/kit';

export function load(event: ServerLoadEvent) {
	return {
		message: `the answer is ${event.locals.answer}`
	};
}
