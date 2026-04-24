<script lang="ts">
	import type Portfolio from '../lib/Portfolio';

	interface Props {
		portfolios: Portfolio[];
	}

	const { portfolios }: Props = $props();

	let labels: string[] = ['All'];
	portfolios
		.map((a) => a.label)
		.map((b) => b)
		.forEach((c) => {
			c.forEach((d) => {
				if (labels.includes(d)) return;
				labels.push(d);
			});
		});
	let selected_label = $state<string | undefined>(undefined);

	let portfolios_filtered = $derived(
		selected_label === undefined
			? portfolios
			: portfolios.filter((x) => selected_label != undefined && x.label.includes(selected_label))
	);

	function set_portfolios_filter(label: string | undefined) {
		selected_label = label;
	}
</script>

<div class="flex min-h-screen flex-col items-center gap-12.5 p-12.5">
	<h1 id="portfolio" class="text-center text-3xl font-bold">Portfolio</h1>
	<div class="flex h-full w-full flex-1 flex-col items-center gap-5">
		{#if portfolios.length > 0}
			<div class="flex flex-row flex-wrap items-center justify-center gap-5">
				{#each labels as label, index (index)}
					<button
						style={selected_label == label || (label === 'All' && selected_label === undefined)
							? 'border: 1px solid white;padding-left: 5px;padding-right: 5px;'
							: ''}
						onclick={() => set_portfolios_filter(label === 'All' ? undefined : label)}
						class="hover:cursor-pointer">{label}</button
					>
				{/each}
			</div>
			<div class="flex flex-row flex-wrap justify-center gap-2.5">
				{#each portfolios_filtered as portfolio, index (index)}
					<a href={portfolio.href} rel="external" target="_blank" class="flex flex-col gap-1.25">
						<img src={portfolio.img.src} alt={portfolio.img.alt} class="h-43.75 w-75" />
						<p>{portfolio.title}</p>
					</a>
				{/each}
			</div>
		{:else}
			<p class="opacity-50">No portfolio yet.</p>
		{/if}
	</div>
</div>
