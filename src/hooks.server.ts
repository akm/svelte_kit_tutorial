import { RequestEvent, MaybePromise, ResolveOptions } from '@sveltejs/kit';

// https://kit.svelte.jp/docs/types#public-types-handle
export async function handle(arg: {
	event: RequestEvent;
	resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}): Promise<Response> {
	const { event, resolve } = arg;
	await console.log('handle is called');
	if (event.url.pathname === '/ping') {
		return new Response('pong');
	}
	event.locals = { answer: 42 };
	return await resolve(event);
}

// https://kit.svelte.jp/docs/types#public-types-handlefetch
export async function handleFetch(arg: {
	event: RequestEvent;
	request: Request;
	fetch: typeof fetch;
}): Promise<Response> {
	const { request, fetch } = arg;
	const url = new URL(request.url);
	if (url.pathname === '/handle_fetch/a') {
		return await fetch('/handle_fetch/b');
	}
	return await fetch(request);
}

// https://kit.svelte.jp/docs/types#public-types-handleservererror
export function handleError(input: { error: unknown; event: RequestEvent }) {
	console.error('handleError is called');
	const { error } = input;
	if (error instanceof Error) {
		console.error(error.stack);
	} else {
		console.error('handleError got unknown error object', error);
	}

	return {
		message: 'everything is fine',
		code: 'JEREMYBEARIMY'
	};
}
