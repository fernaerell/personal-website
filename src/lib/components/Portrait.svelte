<div  class="portrait" aria-hidden="true">
	<img 
		src="/portrait.webp" 
		alt="" 
		width="1024" 
		height="1034"
		loading="eager"
		fetchpriority="high"
		class="h-full w-full object-contain object-bottom"
	/>
</div>

<style>
	.portrait {
		position: absolute;
		inset: 0 auto 0 0;
		width: 50%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		pointer-events: none;
		transform: translateX(-10%);
		filter: drop-shadow(0 34px 70px rgb(0 0 0 / 0.82)) drop-shadow(-22px -14px 60px rgb(150 182 235 / 0.09));
		-webkit-mask-image: linear-gradient(
			94deg,
			#000 0%,
			#000 78%,
			rgb(0 0 0 / 0.4) 85%,
			transparent 91%
		);
		mask-image: linear-gradient(
			94deg,
			#000 0%,
			#000 78%,
			rgb(0 0 0 / 0.4) 85%,
			transparent 91%
		);
	}

	@media (max-width: 1023px) {
		.portrait {
			top: auto;
			left: 50%;
			width: min(84%, 58svh);
			aspect-ratio: 1024 / 1034;
			transform: translateX(-50%);
			filter: drop-shadow(0 30px 64px rgb(0 0 0 / 0.8));
			-webkit-mask-image: linear-gradient(
				to bottom,
				#000 26%,
				rgb(0 0 0 / 0.45) 60%,
				transparent 88%
			);
			mask-image: linear-gradient(
				to bottom,
				#000 26%,
				rgb(0 0 0 / 0.45) 60%,
				transparent 88%
			);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.portrait img {
			/* animation: settle 1.4s cubic-bezier(0.34, 0.14, 0.75, 0.71) both; */
			/* animation: settle 1.4s cubic-bezier(0.42, 0, 0.58, 1) both; */
			animation: settle 1.4s cubic-bezier(0.25, 0.25, 0.75, 1) both;
		}
	}

	@keyframes settle {
		0% {
			opacity: 0;
			/* transform: translateY(2.5%) scale(1.04); */
			transform: translateY(100%) scale(1.5);
			filter: blur(1.5rem);
		}
		50% {
			transform: translateY(50%) scale(1.5);
			filter: blur(1rem);
		}
		100% {
			opacity: 1;
			transform: none;
			filter: none;
		}
	}
</style>