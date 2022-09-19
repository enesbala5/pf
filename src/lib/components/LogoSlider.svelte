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
	class="slider-container lg:my-44 my-12 bg-neutral-100 dark:bg-darkgray"
>
	<ul class="slider">
		<li class="slider__slide">
			<div class="slide__content">1</div>
		</li>
		{#each Array(3) as _, index (index)}
			{#each logoPanel as logo}
				<li class="slider__slide">
					<div
						on:mouseenter={hoveredOverLink}
						on:mouseleave={notHovering}
						class="slide__content cursor-none opacity-70 transition-opacity ease-in-out hover:opacity-100"
					>
						<svelte:component
							this={logo.logo}
							classNames={`fill-black dark:fill-white opacity-80 hover:opacity-90 w-full ${
								logo.name === 'Universi Language Center'
									? 'h-16'
									: logo.name === 'List4Free'
									? 'h-6'
									: 'max-h-8'
							}`}
						/>
					</div>
				</li>
			{/each}
		{/each}
	</ul>
</div>

<style lang="scss">
	/* Slider CSS logic */
	.slider {
		--slider-inner-width: 3000px;
		--slider-speed: 40s;
	}

	@media only screen and (max-width: 768px) {
		.slider {
			--slider-inner-width: 1536px;
			--slider-speed: 15s;
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
		transition: animation-play-state ease 1s;
	}

	.slider-container {
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
			flex-grow: 1;
			// flex-basis: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			opacity: 80%;
			&:hover {
				opacity: 90%;
			}
			.slide__content {
				color: white;
				font-size: 80px;
			}
		}
	}
</style>


