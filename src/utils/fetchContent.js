export async function fetchContent() {
	const projects = import.meta.glob('../../data/projects.json', {
		eager: true,
	});
	return projects['../../data/projects.json'].default;
}
