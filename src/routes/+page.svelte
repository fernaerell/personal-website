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

	import additional_mobs_webp from '$lib/assets/images/additional_mobs.webp';
	import sawit_webp from '$lib/assets/images/sawit.webp';
	import titans_webp from '$lib/assets/images/titans.webp';

	// import placeholder from '$lib/assets/images/placeholder.webp';

	import HeaderComponent from './components/Header.svelte';
	import PortfolioComponent from './components/Portfolio.svelte';
	import FooterComponent from './components/Footer.svelte';

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

	const PFL_MC_JAVA_MOD = 'Minecraft Java Mod';
	const PFL_MC_MYHTIC_MOBS_AND_MODEL_ENGINE = 'Minecraft MythicMobs & ModelEngine';
	const PFL_MC_BEDROCK_ADDON = 'Minecraft Add-on';

	let portfolios: Portfolio[] = [
		// {
		// 	href: '/',
		// 	img: {
		// 		src: placeholder,
		// 		alt: 'placeholder'
		// 	},
		// 	title: 'Placeholder',
		// 	label: 'Placeholder'
		// },
		{
			href: 'https://youtu.be/149eF_udHZI?si=C40zpLLOkU_6761O',
			img: {
				src: 'https://i3.ytimg.com/vi/149eF_udHZI/maxresdefault.jpg',
				alt: 'Aerell Fasting Image'
			},
			title: 'Aerell Fasting',
			label: PFL_MC_BEDROCK_ADDON
		},
		{
			href: 'https://youtu.be/2AGPcd45Lvc?si=SrpnhhBNA51jDM44',
			img: {
				src: 'https://i3.ytimg.com/vi/2AGPcd45Lvc/maxresdefault.jpg',
				alt: 'Aerell Time Text Image'
			},
			title: 'Aerell Time Text',
			label: PFL_MC_BEDROCK_ADDON
		},
		{
			href: 'https://drive.google.com/file/d/18CKmCfYqSsNb1O6nhVrdLzEjsHUD66BS/view?usp=sharing',
			img: {
				src: sawit_webp,
				alt: 'Sawit Image'
			},
			title: 'Sawit',
			label: PFL_MC_JAVA_MOD
		},
		{
			href: 'https://youtu.be/UFIP6Ipsgcs?si=A3Xmz0KNU3oUcHrE',
			img: {
				src: 'https://i3.ytimg.com/vi/UFIP6Ipsgcs/maxresdefault.jpg',
				alt: 'Aerell NPC Image'
			},
			title: 'Aerell NPC',
			label: PFL_MC_BEDROCK_ADDON
		},
		{
			href: 'https://www.curseforge.com/minecraft/mc-mods/aerellcrafter',
			img: {
				src: 'https://raw.githubusercontent.com/aerell-minecraft/aerell-crafter/refs/heads/main/gif/with.gif',
				alt: 'Aerell Crafter Gif'
			},
			title: 'Aerell Crafter',
			label: PFL_MC_JAVA_MOD
		},
		{
			href: 'https://youtu.be/s9zcFahb3wg?si=YXrmY51ovjbmKEPY',
			img: {
				src: 'https://i3.ytimg.com/vi/s9zcFahb3wg/maxresdefault.jpg',
				alt: 'Aerell Flags Image'
			},
			title: 'Aerell Flags & Headbands',
			label: PFL_MC_BEDROCK_ADDON
		},
		{
			href: 'https://drive.google.com/file/d/1rNik7oqhqOC9L66j09OXFqy4vEqZIim_/view?usp=sharing',
			img: {
				src: titans_webp,
				alt: 'Titans Image'
			},
			title: 'Titans (Model from client)',
			label: PFL_MC_JAVA_MOD
		},
		{
			href: 'https://drive.google.com/file/d/1S_3SZ2BntmKT86rFCRFNUsNCnLo71r64/view?usp=sharing',
			img: {
				src: additional_mobs_webp,
				alt: 'Additional Mobs Image'
			},
			title: 'Additional Mobs (Model from client)',
			label: PFL_MC_MYHTIC_MOBS_AND_MODEL_ENGINE
		},
		{
			href: 'https://mcpedl.com/reltech-digital-clock-addon/',
			img: {
				src: 'https://i3.ytimg.com/vi/yEx5T6HiiLI/maxresdefault.jpg',
				alt: 'Digital Clock Image'
			},
			title: 'Digital Clock',
			label: PFL_MC_BEDROCK_ADDON
		},
		{
			href: 'https://youtu.be/A2PakxHFyfg?si=UyegmsNE-2cJP959',
			img: {
				src: 'https://i3.ytimg.com/vi/A2PakxHFyfg/maxresdefault.jpg',
				alt: 'Smart Torch Image'
			},
			title: 'Smart Torch',
			label: PFL_MC_BEDROCK_ADDON
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeT7TDkvwX8lRURfQKbVEDkx',
			img: {
				src: 'https://i3.ytimg.com/vi/-FM4k4FtvFw/maxresdefault.jpg',
				alt: 'Partner Image'
			},
			title: 'Partner',
			label: PFL_MC_BEDROCK_ADDON
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

<FooterComponent year={2026} name="Fern Aerell"></FooterComponent>
