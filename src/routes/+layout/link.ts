export class Link {
	constructor(readonly path: string, readonly text: string) {}

	match(path: string): boolean {
		return path === this.path;
	}
}
