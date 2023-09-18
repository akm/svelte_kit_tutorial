import { RequestEvent, MaybePromise, ResolveOptions } from '@sveltejs/kit';

// https://kit.svelte.jp/docs/types#public-types-handle
export async function handle(arg: {
	event: RequestEvent;
	resolve(event: RequestEvent, opts?: ResolveOptions): MaybePromise<Response>;
}): MaybePromise<Response> {
	await console.log('handle is called');
	return await arg.resolve(arg.event);
}
