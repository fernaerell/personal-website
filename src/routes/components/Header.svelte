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

	import { onMount } from 'svelte';

	import Typed, { type TypedOptions } from 'typed.js';

	interface Link {
		title: string;
		href: string;
		img: {
			src: string;
			alt: string;
		};
	}

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

	let typed_strings_element: HTMLElement;
	let typed_cursor_element: HTMLElement;

	onMount(() => {
		const typed_options: TypedOptions = {
			stringsElement: typed_strings_element,
			typeSpeed: 80,
			backSpeed: 40,
			backDelay: 1500,
			startDelay: 300,
			smartBackspace: true,
			loop: true,
			showCursor: true,
			cursorChar: '|'
		};

		const typed = new Typed(typed_cursor_element, typed_options);

		return () => {
			typed.destroy();
		};
	});
</script>

<header class="flex h-screen flex-col items-center justify-center gap-6.75 px-7.5 sm:p-0">
	<img
		src={photo_profile_webp}
		alt="Fern Aerell, Software Engineer & Digital Creator"
		width="100"
		height="100"
		loading="eager"
		class="rounded-full"
	/>
	<h1 class="text-center text-[1rem] font-bold sm:text-[1.25rem]">I'm Fern Aerell</h1>
	<h2 class="text-center text-[1.5rem] font-bold sm:text-[2.25rem]">
		<div bind:this={typed_strings_element}>
			<span>Digital Creator</span>
			<span>Software Engineer</span>
		</div>

		<span bind:this={typed_cursor_element}></span>
	</h2>
	<p class="text-center text-[1rem] sm:text-[1.125rem]">I haven't figured out what to write yet.</p>
	<div class="flex flex-row flex-wrap items-center justify-center gap-7.5 p-2.5">
		{#each links as link, index (index)}
			<a
				title={link.title}
				href={link.href}
				rel="nofollow noopener external"
				target="_blank"
				class="transition-transform hover:scale-110"
			>
				<img src={link.img.src} alt={link.img.alt} width="32" height="32" />
			</a>
		{/each}
	</div>
</header>
