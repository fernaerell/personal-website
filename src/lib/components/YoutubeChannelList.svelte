<script lang="ts">
	import aerellgamers_photo_profile from '$lib/assets/images/fernaerell_youtube_photo_profiles/aerellgamers.webp';
	import aerelltech_photo_profile from '$lib/assets/images/fernaerell_youtube_photo_profiles/aerelltech.webp';
	import aerellstudio_photo_profile from '$lib/assets/images/fernaerell_youtube_photo_profiles/aerellstudio.webp';
	import fernaerell_photo_profile from '$lib/assets/images/fernaerell_youtube_photo_profiles/fernaerell.webp';

	interface YoutubeChannel {
		photo_profile: string;
		name: string;
		url: string;
	}

	const youtube_channels: YoutubeChannel[] = [
		{
			photo_profile: aerelltech_photo_profile,
			name: 'Aerell Tech',
			url: 'https://www.youtube.com/@aerelltech'
		},
		{
			photo_profile: fernaerell_photo_profile,
			name: 'Fern Aerell',
			url: 'https://www.youtube.com/@fernaerell'
		},
		{
			photo_profile: aerellstudio_photo_profile,
			name: 'Aerell Studio',
			url: 'https://www.youtube.com/@aerellstudio'
		},
		{
			photo_profile: aerellgamers_photo_profile,
			name: 'Aerell Gamers',
			url: 'https://www.youtube.com/@aerellgamers'
		}
	];

	export let show_youtube_channel_list = false;

	let isVisible = false;
	let isAnimation = false;

	$: if (show_youtube_channel_list) {
		open();
	} else if (isVisible) {
		close();
	}

	function open() {
		isVisible = true;
		isAnimation = true;
	}

	function close() {
		isAnimation = false;
		setTimeout(() => {
			isVisible = false;
			show_youtube_channel_list = false;
		}, 400);
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) close();
	}

	function handleEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') close();
	}
</script>

{#if isVisible}
	<div
		class="bg overflow-hidden flex justify-center items-center w-screen h-screen bg-[rgba(0,0,0,0.70)] absolute z-50 px-[30px] sm:p-0"
		class:show={isAnimation}
		on:click={handleBackdropClick}
		on:keydown={handleEscape}
		role="button"
		tabindex="0"
	>
		<div class="modal flex flex-col bg-[#212833] p-5 gap-5 rounded-[10px]" class:show={isAnimation}>
			<h1 class="font-bold text-[16px] text-center">My Youtube Channels</h1>
			<div class="flex flex-row flex-wrap gap-2.5 justify-center items-center">
				{#each youtube_channels as youtube_channel (youtube_channel.name)}
					<a
						href={youtube_channel.url}
						target="_blank"
						class="flex flex-col justify-center items-center p-[9px] gap-2.5 hover:scale-105 transition-all"
					>
						<img
							src={youtube_channel.photo_profile}
							alt={youtube_channel.name}
							width="100"
							height="100"
						/>
						<p class="font-bold text-[12px]">{youtube_channel.name}</p>
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	@keyframes bg-show {
		from {
			background-color: rgba(0, 0, 0, 0);
		}
		to {
			background-color: rgba(0, 0, 0, 0.7);
		}
	}

	@keyframes bg-hide {
		from {
			background-color: rgba(0, 0, 0, 0.7);
		}
		to {
			background-color: rgba(0, 0, 0, 0);
		}
	}

	@keyframes modal-show {
		from {
			transform: translateY(100vh);
		}
		to {
			transform: translateY(0px);
		}
	}

	@keyframes modal-hide {
		from {
			transform: translateY(0px);
		}
		to {
			transform: translateY(100vh);
		}
	}

	.bg {
		animation: bg-hide 500ms ease-in-out;
	}

	.bg.show {
		animation: bg-show 500ms ease-in-out;
		animation-fill-mode: forwards;
	}

	.modal {
		animation: modal-hide 500ms ease-in-out;
	}

	.modal.show {
		animation: modal-show 500ms ease-in-out;
		animation-fill-mode: forwards;
	}
</style>
