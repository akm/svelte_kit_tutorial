import { RequestEvent, MaybePromise, ResolveOptions } from '@sveltejs/kit';

// https://kit.svelte.jp/docs/types#public-types-handle
export async function handle(arg: {
	event: RequestEvent;
	resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}): MaybePromise<Response> {
	const { event, resolve } = arg;
	await console.log('handle is called');
	if (event.url.pathname === '/ping') {
		return new Response('pong');
	}
	event.locals = { answer: 42 };
	return await resolve(event);
}
