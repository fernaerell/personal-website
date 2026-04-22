<script lang="ts">
	import photo_profile_webp from '$lib/assets/images/photo_profile.webp';
	import github_icon_webp from '$lib/assets/images/icons/social_media/github.webp';
	import linkedin_icon_webp from '$lib/assets/images/icons/social_media/linkedin.webp';
	import x_icon_webp from '$lib/assets/images/icons/social_media/x.webp';
	import tiktok_icon_webp from '$lib/assets/images/icons/social_media/tiktok.webp';
	import facebook_icon_webp from '$lib/assets/images/icons/social_media/facebook.webp';
	import threads_icon_webp from '$lib/assets/images/icons/social_media/threads.webp';
	import instagram_icon_webp from '$lib/assets/images/icons/social_media/instagram.webp';
	import youtube_icon_webp from '$lib/assets/images/icons/social_media/youtube.webp';
	import gmail_icon_webp from '$lib/assets/images/icons/social_media/gmail.webp';

	import placeholder from '$lib/assets/images/placeholder.webp';

	import HeaderComponent from './components/Header.svelte';
	import PortfolioComponent from './components/Portfolio.svelte';

	import type Link from './lib/Link';
	import type Portfolio from './lib/Portfolio';

	const professions: string[] = ['Digital Creator', 'Software Engineer'];

	const links: Link[] = [
		{
			title: 'Github',
			href: 'https://github.com/fernaerell',
			img: {
				src: github_icon_webp,
				alt: 'github icon'
			}
		},
		{
			title: 'LinkedIn',
			href: 'https://www.linkedin.com/in/fernaerell',
			img: {
				src: linkedin_icon_webp,
				alt: 'linkedin icon'
			}
		},
		{
			title: 'X',
			href: 'https://x.com/fernaerell',
			img: {
				src: x_icon_webp,
				alt: 'x icon'
			}
		},
		{
			title: 'Tiktok',
			href: 'https://tiktok.com/@fernaerell',
			img: {
				src: tiktok_icon_webp,
				alt: 'tiktok icon'
			}
		},
		{
			title: 'Facebook',
			href: 'https://www.facebook.com/fernaerelll',
			img: {
				src: facebook_icon_webp,
				alt: 'facebook icon'
			}
		},
		{
			title: 'Threads',
			href: 'https://www.threads.com/@fernaerell',
			img: {
				src: threads_icon_webp,
				alt: 'threads icon'
			}
		},
		{
			title: 'Instagram',
			href: 'https://instagram.com/fernaerell',
			img: {
				src: instagram_icon_webp,
				alt: 'instagram icon'
			}
		},
		{
			title: 'Youtube',
			href: 'https://www.youtube.com/@fernaerell',
			img: {
				src: youtube_icon_webp,
				alt: 'youtube icon'
			}
		},
		{
			title: 'Gmail',
			href: 'mailto:fernaerell2020@gmail.com',
			img: {
				src: gmail_icon_webp,
				alt: 'gmail icon'
			}
		}
	];

	let portfolios: Portfolio[] = [
		{
			href: '/',
			img: {
				src: placeholder,
				alt: 'placeholder'
			},
			title: 'Placeholder',
			label: 'Placeholder'
		}
	];
</script>

<HeaderComponent
	photo_profile={photo_profile_webp}
	alt_photo_profile="Fern Aerell, Software Engineer & Digital Creator"
	{links}
	{professions}
>
	{#snippet name()}
		Fern Aerell
	{/snippet}
	{#snippet description()}
		I haven't figured out what to write yet.
	{/snippet}
</HeaderComponent>

<PortfolioComponent {portfolios}></PortfolioComponent>
