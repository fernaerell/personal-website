<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import Typed, { type TypedOptions } from 'typed.js';

	import type Link from '../lib/Link';

	interface Props {
		photo_profile: string;
		alt_photo_profile: string;
		name: Snippet;
		professions: string[];
		description: Snippet;
		links: Link[];
	}

	const { photo_profile, alt_photo_profile, name, professions, description, links }: Props =
		$props();

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
		src={photo_profile}
		alt={alt_photo_profile}
		width="100"
		height="100"
		loading="eager"
		class="rounded-full"
	/>
	<h1 class="text-center text-[1rem] font-bold sm:text-[1.25rem]">I'm {@render name()}</h1>
	<h2 class="text-center text-[1.5rem] font-bold sm:text-[2.25rem]">
		<div bind:this={typed_strings_element}>
			{#each professions as profession, index (index)}
				<span>{profession}</span>
			{/each}
		</div>

		<span bind:this={typed_cursor_element}></span>
	</h2>
	<p class="text-center text-[1rem] sm:text-[1.125rem]">{@render description()}</p>
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
