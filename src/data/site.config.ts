interface SiteConfig {
	author: string;
	title: string;
	description: string;
	tags: string;
	lang: string;
	ogLocale: string;
	shareMessage: string;
	paginationSize: number;
}

export const siteConfig: SiteConfig = {
	author: 'Patricio Baliña', // Site author
	title: 'CS Arquitectura', // Site title.
	description:
		'Somos un estudio de arquitectura dedicado a transformar ideas en espacios únicos y funcionales. Combinamos creatividad, innovación y experiencia para diseñar ambientes que reflejan tu visión y necesidades.', // Description to display in the meta tags
	tags: 'estudio de arquitectura, diseño arquitectónico, transformación de espacios, innovación en arquitectura, diseño personalizado, experiencia en arquitectura',
	lang: 'es-ES',
	ogLocale: 'es_ES',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6, // Number of posts per page
};
