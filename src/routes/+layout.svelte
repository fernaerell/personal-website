<script lang="ts">
	import type { Pathname } from '$app/types';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/images/photo_profile.webp';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Fern Aerell</title>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Fern Aerell",
			"alternateName": ["Fern", "Aerell"],
			"jobTitle": "Digital Creator and Software Engineer",
			"description": "Fern Aerell is a Digital creator and Software engineer based in Indonesia.",
			"image": "https://avatars.githubusercontent.com/u/103925000?v=4",
			"url": "https://fernaerell.vercel.app",
			"sameAs": [
				"https://github.com/fernaerell",
				"https://www.linkedin.com/in/fernaerell",
				"https://x.com/fernaerell",
				"https://tiktok.com/@fernaerell",
				"https://www.facebook.com/fernaerelll",
				"https://www.threads.com/@fernaerell",
				"https://instagram.com/fernaerell",
				"https://www.youtube.com/@fernaerell"
			],
			"email": "fernaerell2020@gmail.com"
		}
	</script>
	<meta name="google-site-verification" content="78yIckYlGCBkFct9KzhT_3qFoimkJfKHcjSIEekwRT0" />
</svelte:head>
{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(localizeHref(page.url.pathname, { locale }) as Pathname)}>{locale}</a>
	{/each}
</div>
