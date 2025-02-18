// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Internet Utilities",
			social: {
				github: 'https://github.com/CenteredSniper/Internet-Utilities',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Beginner Guide', slug: 'guides/introduction' },
					],
				},
				{
					label: 'Wiki',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
