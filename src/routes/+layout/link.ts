export class Link {
	readonly startsWithMatch: boolean;
	constructor(readonly path: string, readonly text: string, startsWithMatch?: boolean) {
		this.startsWithMatch = startsWithMatch || false;
	}

	match(path: string): boolean {
		if (this.startsWithMatch) {
			return path.startsWith(this.path);
		} else {
			return path === this.path;
		}
	}
}
