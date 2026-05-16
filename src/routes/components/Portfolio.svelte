<script lang="ts">
	import additional_mobs_webp from '$lib/assets/images/additional_mobs.webp';
	import sawit_webp from '$lib/assets/images/sawit.webp';
	import titans_webp from '$lib/assets/images/titans.webp';

	import Search from './Search.svelte';
	import Filter from './Filter.svelte';

	import { type Portfolio, getTags } from '../lib/Portfolio';
	import { resolve } from '$app/paths';

	interface Props {
		prefix_title?: string;
		show_more_button: boolean;
		max?: number;
	}

	const props: Props = $props();

	const TAG_GAME_MINECRAFT = 'Minecraft';
	const TAG_GAME_GTA_V = 'GTA V';
	const TAG_TYPE_ADDON = 'Addon';
	const TAG_TYPE_MOD = 'Mod';

	let portfolios: Portfolio[] = [
		{
			href: 'https://youtu.be/149eF_udHZI?si=C40zpLLOkU_6761O',
			img: {
				src: 'https://i3.ytimg.com/vi/149eF_udHZI/maxresdefault.jpg',
				alt: 'Aerell Fasting Image'
			},
			title: 'Aerell Fasting',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://youtu.be/2AGPcd45Lvc?si=SrpnhhBNA51jDM44',
			img: {
				src: 'https://i3.ytimg.com/vi/2AGPcd45Lvc/maxresdefault.jpg',
				alt: 'Aerell Time Text Image'
			},
			title: 'Aerell Time Text',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://drive.google.com/file/d/18CKmCfYqSsNb1O6nhVrdLzEjsHUD66BS/view?usp=sharing',
			img: {
				src: sawit_webp,
				alt: 'Sawit Image'
			},
			title: 'Sawit',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_MOD]
		},
		{
			href: 'https://youtu.be/UFIP6Ipsgcs?si=A3Xmz0KNU3oUcHrE',
			img: {
				src: 'https://i3.ytimg.com/vi/UFIP6Ipsgcs/maxresdefault.jpg',
				alt: 'Aerell NPC Image'
			},
			title: 'Aerell NPC',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://www.curseforge.com/minecraft/mc-mods/aerellcrafter',
			img: {
				src: 'https://raw.githubusercontent.com/aerell-minecraft/aerell-crafter/refs/heads/main/gif/with.gif',
				alt: 'Aerell Crafter Gif'
			},
			title: 'Aerell Crafter',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_MOD]
		},
		{
			href: 'https://youtu.be/s9zcFahb3wg?si=YXrmY51ovjbmKEPY',
			img: {
				src: 'https://i3.ytimg.com/vi/s9zcFahb3wg/maxresdefault.jpg',
				alt: 'Aerell Flags Image'
			},
			title: 'Aerell Flags & Headbands',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://drive.google.com/file/d/1rNik7oqhqOC9L66j09OXFqy4vEqZIim_/view?usp=sharing',
			img: {
				src: titans_webp,
				alt: 'Titans Image'
			},
			title: 'Titans (Model from client)',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_MOD]
		},
		{
			href: 'https://drive.google.com/file/d/1S_3SZ2BntmKT86rFCRFNUsNCnLo71r64/view?usp=sharing',
			img: {
				src: additional_mobs_webp,
				alt: 'Additional Mobs Image'
			},
			title: 'Additional Mobs (Model from client)',
			game: TAG_GAME_MINECRAFT,
			types: []
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeQ61-EcY1Tl7UnRdZ-e2_H2',
			img: {
				src: 'https://img.youtube.com/vi/-mYn7Pra-04/maxresdefault.jpg',
				alt: 'Idul Adha Image'
			},
			title: 'Idul Adha',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://mcpedl.com/reltech-digital-clock-addon/',
			img: {
				src: 'https://i3.ytimg.com/vi/yEx5T6HiiLI/maxresdefault.jpg',
				alt: 'Digital Clock Image'
			},
			title: 'Digital Clock',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://youtu.be/A2PakxHFyfg?si=UyegmsNE-2cJP959',
			img: {
				src: 'https://i3.ytimg.com/vi/A2PakxHFyfg/maxresdefault.jpg',
				alt: 'Smart Torch Image'
			},
			title: 'Smart Torch',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeT7TDkvwX8lRURfQKbVEDkx',
			img: {
				src: 'https://i3.ytimg.com/vi/-FM4k4FtvFw/maxresdefault.jpg',
				alt: 'Partner Image'
			},
			title: 'Partner',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://www.youtube.com/playlist?list=PLVkP-VbRczeQN_vs4PjZxNdxMvF-79mky',
			img: {
				src: 'https://img.youtube.com/vi/pnxBliV9QmQ/maxresdefault.jpg',
				alt: 'Ramadhan Image'
			},
			title: 'Ramadhan',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON, TAG_TYPE_MOD]
		},
		{
			href: 'https://www.youtube.com/watch?v=A1Ng-_zSoOc',
			img: {
				src: 'https://img.youtube.com/vi/A1Ng-_zSoOc/maxresdefault.jpg',
				alt: 'Random Ore Generator Image'
			},
			title: 'Random Ore Generator',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://www.youtube.com/watch?v=JgvSrLJ9Fkw',
			img: {
				src: 'https://img.youtube.com/vi/JgvSrLJ9Fkw/maxresdefault.jpg',
				alt: 'Flat World Village Image'
			},
			title: 'Flat World Village',
			game: TAG_GAME_MINECRAFT,
			types: [TAG_TYPE_ADDON]
		},
		{
			href: 'https://id.gta5-mods.com/scripts/ragdoll-player-when-shot-fern-aerell',
			img: {
				src: 'https://img.youtube.com/vi/Jdf9VIBzo7A/maxresdefault.jpg',
				alt: 'Ragdoll Player When Shot Image'
			},
			title: 'Ragdoll Player When Shot',
			game: TAG_GAME_GTA_V,
			types: [TAG_TYPE_MOD]
		}
	];
</script>

<div class="flex flex-col items-center gap-12.5 p-12.5">
	<h1 id="portfolio" class="text-center text-3xl font-bold">
		{props.prefix_title ?? ''} Portfolio
	</h1>
	<div class="flex h-full w-full flex-1 flex-col items-center gap-5">
		<!-- <div class="flex w-full flex-row items-center gap-2.5">
			<Filter />
			<Search />
		</div> -->
		{#if portfolios.length > 0}
			<div
				class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
			>
				{#each (props.max ? portfolios.slice(0, props.max) : portfolios) as portfolio, index (index)}
					<a
						href={portfolio.href}
						rel="external"
						target="_blank"
						class="group flex flex-col overflow-hidden rounded-2xl bg-[#1a1a1a] transition-transform duration-300 hover:border hover:border-white"
					>
						<div class="aspect-video overflow-hidden">
							<img
								src={portfolio.img.src}
								alt={portfolio.img.alt}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
						</div>
						<div class="flex flex-col gap-4 p-5">
							<h3 class="truncate text-lg font-bold">{portfolio.title}</h3>
							<p class="whitespace-pre-wrap opacity-95">No description.</p>
							<div class="flex flex-row flex-wrap gap-1.5">
								{#each getTags(portfolio) as tag, index (index)}
									<span class="rounded-md border border-[#ffffff48] px-2.5 py-1 text-xs font-medium"
										>{tag}</span
									>
								{/each}
							</div>
						</div>
					</a>
				{/each}
			</div>
			{#if props.show_more_button}
				<a
					href={resolve('/portfolio')}
					class="w-full rounded-2xl bg-[#1a1a1a] px-5 py-3.75 text-center hover:cursor-pointer sm:w-50"
					>Show More</a
				>
			{/if}
		{:else}
			<p class="opacity-50">No portfolio yet.</p>
		{/if}
	</div>
</div>
