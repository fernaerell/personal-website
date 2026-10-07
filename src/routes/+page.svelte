<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import { SITE } from '$lib/data/site';
</script>

<svelte:head>
	<title>{SITE.name} — {SITE.role}</title>
</svelte:head>

<section
	id="home"
	class="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#08090b] text-white"
>
	<!-- Cinematic studio lighting -->
	<div class="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
		<div
			class="absolute inset-0 bg-[linear-gradient(168deg,#15171c_0%,#0b0c0f_42%,#08090b_72%,#050506_100%)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(75%_60%_at_30%_26%,rgba(126,152,196,0.17)_0%,transparent_68%)]"
		></div>
		<div
			class="absolute inset-0 bg-[radial-gradient(55%_50%_at_72%_82%,rgba(196,150,104,0.11)_0%,transparent_70%)]"
		></div>
		<div
			class="absolute inset-x-0 bottom-0 h-[38%] bg-[radial-gradient(120%_100%_at_36%_120%,rgba(94,110,140,0.16)_0%,transparent_72%)]"
		></div>
	</div>

	<!-- Grid hairlines -->
	<div class="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]" aria-hidden="true">
		<div
			class="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_8.3333%)]"
		></div>
	</div>

	<Portrait />
	<SiteHeader />

	<main class="relative z-10 flex flex-1 flex-col">
		<div
			class="grid flex-1 grid-cols-12 items-start gap-y-10 px-5 pt-28 pb-10 sm:px-8 sm:pt-32 sm:pb-12 lg:items-center lg:px-12 lg:pb-0"
		>
			<div class="col-span-12 lg:col-span-7 lg:col-start-6">
				<div class="flex items-center gap-4">
					<span class="h-px w-8 bg-white/25 sm:w-12"></span>
					<p
						class="font-sans text-[0.625rem] font-medium tracking-[0.28em] text-white/45 uppercase sm:text-[0.6875rem]"
					>
						{SITE.role}
					</p>
				</div>

				<h1
					class="font-display mt-5 text-[clamp(2.4rem,7.4vw,9.25rem)] leading-[0.86] font-extrabold tracking-[-0.035em] whitespace-nowrap text-white uppercase sm:mt-6"
				>
					{SITE.name}
				</h1>

				<div
					class="mt-7 flex flex-col gap-7 border-t border-white/10 pt-6 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
				>
					<SocialLinks />
					<p
						class="font-sans text-[0.6875rem] leading-relaxed tracking-[0.14em] text-white/35 uppercase"
					>
						{SITE.location}
					</p>
				</div>
			</div>
		</div>

		<footer
			class="relative z-10 flex items-end justify-between gap-6 border-t border-white/8 px-5 py-5 sm:px-8 lg:px-12"
		>
			<a
				href="mailto:{SITE.email}"
				class="font-sans text-[0.6875rem] tracking-[0.14em] text-white/40 uppercase transition-colors duration-300 hover:text-white sm:text-xs"
			>
				{SITE.email}
			</a>
			<p
				class="hidden font-sans text-[0.6875rem] tracking-[0.14em] text-white/30 uppercase sm:block"
			>
				&copy; {new Date().getFullYear()}
				{SITE.name}
			</p>
		</footer>
	</main>

	<!-- Vignette + film grain -->
	<div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
		<div
			class="absolute inset-0 bg-[radial-gradient(115%_85%_at_42%_42%,transparent_38%,rgba(0,0,0,0.55)_78%,rgba(0,0,0,0.85)_100%)]"
		></div>
		<div class="grain absolute inset-0 opacity-[0.16] mix-blend-overlay"></div>
	</div>
</section>

<style>
	.grain {
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		background-repeat: repeat;
	}
</style>
