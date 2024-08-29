import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true, // Escuchar en todas las interfaces
		// port: 3000, // Puedes cambiar el puerto si lo necesitas
	},
	site: 'https://cs-arq.vercel.app/', // Write here your website url
});
