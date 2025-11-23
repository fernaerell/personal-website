<script lang="ts">
	import fernaerell from '$lib/assets/images/fernaerell.webp';
	import facebook_icon from '$lib/assets/images/facebook_icon.webp';
	import github_icon from '$lib/assets/images/github_icon.webp';
	import gmail_icon from '$lib/assets/images/gmail_icon.webp';
	import instagram_icon from '$lib/assets/images/instagram_icon.webp';
	import linkedin_icon from '$lib/assets/images/linkedin_icon.webp';
	import threads_icon from '$lib/assets/images/threads_icon.webp';
	import tiktok_icon from '$lib/assets/images/tiktok_icon.webp';
	import x_icon from '$lib/assets/images/x_icon.webp';
	import youtube_icon from '$lib/assets/images/youtube_icon.webp';

	import Typed, { type TypedOptions } from 'typed.js';
	import { onMount } from 'svelte';

	interface SocialMedia {
		url: string;
		img: string;
		alt: string;
	}

	const social_media_data: SocialMedia[] = [
		{
			url: 'https://github.com/fernaerell',
			img: github_icon,
			alt: 'github'
		},
		{
			url: 'https://www.linkedin.com/in/fernaerell',
			img: linkedin_icon,
			alt: 'linkedin'
		},
		{
			url: 'https://x.com/fernaerell',
			img: x_icon,
			alt: 'x'
		},
		{
			url: 'https://tiktok.com/@fernaerell',
			img: tiktok_icon,
			alt: 'tiktok'
		},
		{
			url: 'https://www.facebook.com/fernaerelll',
			img: facebook_icon,
			alt: 'facebook'
		},
		{
			url: 'https://www.threads.com/@fernaerell',
			img: threads_icon,
			alt: 'threads'
		},
		{
			url: 'https://instagram.com/fernaerell',
			img: instagram_icon,
			alt: 'instagram'
		},
		{
			url: 'https://www.youtube.com/@fernaerell',
			img: youtube_icon,
			alt: 'youtube'
		},
		{
			url: 'mailto:fernaerell2020@gmail.com',
			img: gmail_icon,
			alt: 'gmail'
		}
	];

	let typedElement: HTMLElement;
	let typedStringsElement: HTMLElement;

	onMount(() => {
		const typed_options: TypedOptions = {
			stringsElement: typedStringsElement,
			typeSpeed: 80,
			backSpeed: 40,
			backDelay: 1500,
			startDelay: 300,
			smartBackspace: true,
			loop: true,
			showCursor: true,
			cursorChar: '|'
		};

		const typed = new Typed(typedElement, typed_options);

		return () => {
			typed.destroy();
		};
	});
</script>

<header class="flex justify-center items-center h-screen px-[30px] sm:p-0">
	<div class="flex flex-col justify-center items-center gap-[27px]">
		<img src={fernaerell} alt="fernaerell" width="100" />
		<span class="font-bold text-[1rem] sm:text-[1.25rem] text-center">
			I'm
			<a href="https://www.google.com/search?q=Fern+Aerell" target="_blank" class="underline"
				>Fern Aerell</a
			>
		</span>
		<div class="font-bold text-[1.5rem] sm:text-[2.25rem] text-center">
			<div bind:this={typedStringsElement}>
				<p>Software Engineer</p>
				<p>Creative Technologist</p>
			</div>
			<span bind:this={typedElement}></span>
		</div>
		<p class="text-[1rem] sm:text-[1.125rem] text-center">
			I build systems, tools, and interactive experiences through code.
		</p>
		<div class="flex flex-row flex-wrap p-2.5 gap-[30px] justify-center items-center">
			{#each social_media_data as social_media (social_media.alt)}
				<a
					href={social_media.url}
					target="_blank"
					class="hover:scale-110 transition-transform"
				>
					<img src={social_media.img} alt={social_media.alt} width="32" />
				</a>
			{/each}
		</div>
	</div>
</header>
