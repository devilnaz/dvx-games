// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	ssr: false,
	devtools: { enabled: true },
	css: ['~/assets/css/main.scss'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	alias: {
		'@components': './components',
		'@assets': './assets',
		'@stores': './stores',
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
                @import "./assets/css/_mixins.scss";
              `,
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			midjourney_api_key: process.env.NUXT_APP_MIDJOURNEY_API_KEY,
			openai_api_key: process.env.NUXT_APP_OPENAI_API_KEY,
			api_url: process.env.NUXT_APP_API_URL,
		},
	},
	nitro: {
		prerender: {
			// crawlLinks: true,
			// failOnError: false,
		},
	},
	routeRules: {
		'/terms': {
			redirect: 'https://dvxgames.net/terms',
		},
		'/terms-to-use': {
			redirect: 'https://dvxgames.net/terms',
		},
		'/imprint': {
			redirect: 'https://dvxgames.net/imprint',
		},
		'/privacy': {
			redirect: 'https://dvxgames.net/privacy',
		},
		'/privacy-policy': {
			redirect: 'https://dvxgames.net/privacy',
		},
		'/contact': {
			redirect: 'https://dvxgames.net/contact',
		},
		'/products/**': {
			redirect: 'https://dvxgames.net/apps/**',
		},
	},
	modules: ['nuxt-font-loader', "@nuxt/image"],
	fontLoader: {
		local: [
			{
				src: '/fonts/karantina/Karantina-Regular.woff2',
				family: 'Karantina',
			},
			{
				src: '/fonts/karantina/Karantina-Bold.woff2',
				family: 'Karantina',
			},
			{
				src: '/fonts/inter/Inter-Medium.woff2',
				family: 'Inter',
			},
			{
				src: '/fonts/inter/Inter-SemiBold.woff2',
				family: 'Inter',
			},
			{
				src: '/fonts/inter/Inter-Regular.woff2',
				family: 'Inter',
			},
			{
				src: '/fonts/karantina/Karantina-Regular.woff',
				family: 'Karantina',
			},
			{
				src: '/fonts/karantina/Karantina-Bold.woff',
				family: 'Karantina',
			},
			{
				src: '/fonts/inter/Inter-Medium.woff',
				family: 'Inter',
			},
			{
				src: '/fonts/inter/Inter-SemiBold.woff',
				family: 'Inter',
			},
			{
				src: '/fonts/inter/Inter-Regular.woff',
				family: 'Inter',
			},
			{
				src: '/fonts/gotham/GothamXNarrow-Book.woff',
				family: 'Gotham XNarrow',
			},
			{
				src: '/fonts/gotham/GothamXNarrow-Book.woff2',
				family: 'Gotham XNarrow',
			},
		],
	},
})
