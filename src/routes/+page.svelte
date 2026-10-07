<script lang="ts">
	import Portrait from '$lib/components/Portrait.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { SITE } from '$lib/data/site';
</script>

<svelte:head>
	<title>{SITE.name}</title>
</svelte:head>

<section
	id="home"
	class="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#08090b] text-white"
>
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
					<p
						class="font-sans text-[0.6875rem] leading-relaxed tracking-[0.14em] text-white/35 uppercase"
					>
						{SITE.location}
					</p>
				</div>
			</div>
		</div>
	</main>
</section>
