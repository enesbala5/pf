<script>
	import { logoPanel } from '$lib/info/logoPanel';
	import { hoverOverLink } from '$lib/state/hoverOver';

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
	}
</script>

<div
	class="flex-container my-24 bg-neutral-100 py-4 dark:bg-darkgray lg:my-32"
>
	<div class="slider-container">
		<ul class="slider">
			{#each Array(2) as _}
				{#each logoPanel as logo}
					<li class="slider__slide">
						<div class="slide__content">
							<div
								on:mouseenter={hoveredOverLink}
								on:mouseleave={notHovering}
								class="opacity-70 transition-opacity ease-in-out hover:opacity-100"
							>
								<svelte:component
									this={logo.logo}
									classNames={`fill-black dark:fill-white opacity-80 hover:opacity-90 w-full ${
										logo.name === 'Universi Language Center'
											? 'h-20'
											: logo.name === 'List4Free'
											? 'h-6'
											: 'max-h-10'
									}`}
								/>
							</div>
						</div>
					</li>
				{/each}
			{/each}
		</ul>
	</div>
</div>

<style lang="scss">
	/* Slider CSS logic */
	.slider {
		--slider-inner-width: 1500px;
		--slider-speed: 10s;
	}

	@media only screen and (min-width: 1024px) {
		.slider {
			--slider-inner-width: 2500px;
			--slider-speed: 12s;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(-5%);
		}
		100% {
			transform: translateX(
				calc((0px - var(--slider-inner-width)) - 5%)
			);
		}
	}
	.slider {
		transform: translate3d(0, 0, 0);
		-webkit-transform: translate3d(0, 0, 0);
		animation: scroll linear infinite var(--slider-speed);
		width: calc(2 * var(--slider-inner-width));
		transition: animation-play-state ease 0.3s;
	}

	/* Main styles CSS */
	.flex-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.slider-container {
		// box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		height: 100px;
		overflow: hidden;
		position: relative;
		width: 100%;
		.slider {
			display: flex;
			align-items: center;
			list-style: none;
			margin: 0;
		}

		.slider__slide {
			height: 100px;
			flex-grow: 1;
			// flex-basis: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			.slide__content {
				color: white;
				font-size: 80px;
			}
		}
	}
</style>
