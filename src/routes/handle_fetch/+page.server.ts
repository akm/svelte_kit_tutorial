import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load(event: ServerLoadEvent) {
	const { fetch } = event;
	const response = await fetch('/handle_fetch/a');

	return {
		message: await response.text()
	};
}
