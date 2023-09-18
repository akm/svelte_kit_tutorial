export async function handle({ event, resolve }) {
	console.log('handle is called');
	return await resolve(event);
}
