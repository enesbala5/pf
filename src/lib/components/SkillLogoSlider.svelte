<script lang="ts">
	import { logoPanel } from '$lib/info/logoPanel';
	import {
		designSkills,
		frontendSkills,
		otherSkills,
	} from '$lib/info/skills';
	import { hoverOverLink } from '$lib/state/hoverOver';
	import {
		preloadImageUrls,
		selectedCategoryMobile,
	} from '$lib/state/preloadImageUrls';

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
	}
</script>

<div class="flex-container py-1">
	{#if $selectedCategoryMobile === 'uiux'}
		<div class="slider-container">
			<ul class="slider">
				{#each Array(2) as _}
					{#each $preloadImageUrls as logo}
						{#if designSkills.some((el) => `icons/skills/${el.icon}` == logo)}
							<li class="slider__slide">
								<div class="slide__content">
									<div class="">
										<img
											src={logo}
											alt={logo}
											class={`w-full fill-black dark:fill-white ${
												logo !==
												'icons/skills/tailwind/white.svg'
													? 'max-h-8'
													: 'max-h-6'
											}`}
										/>
									</div>
								</div>
							</li>
						{/if}
					{/each}
				{/each}
			</ul>
		</div>
	{/if}
	{#if $selectedCategoryMobile === 'dev'}
		<div class="slider-container">
			<ul class="slider">
				{#each Array(2) as _}
					{#each $preloadImageUrls as logo}
						{#if frontendSkills.some((el) => `icons/skills/${el.icon}` == logo)}
							<li class="slider__slide">
								<div class="slide__content">
									<div class="">
										<img
											src={logo}
											alt={logo}
											class={`w-full fill-black dark:fill-white ${
												logo !==
												'icons/skills/tailwind/white.svg'
													? 'max-h-8'
													: 'max-h-6'
											}`}
										/>
									</div>
								</div>
							</li>
						{/if}
					{/each}
				{/each}
			</ul>
		</div>
	{/if}
	{#if $selectedCategoryMobile === '3d'}
		<div
			class="flex h-[50px] w-full items-center justify-between p-4"
		>
			{#each $preloadImageUrls as logo}
				{#if otherSkills.some((el) => `icons/skills/${el.icon}` == logo)}
				<div class="max-h-6 h-full">

					<img
						src={logo}
						alt={logo}
						class={`w-full fill-black dark:fill-white h-full object-fit`}
					/>
				</div>
				{/if}
			{/each}
		</div>
	{/if}
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
		height: 50px;
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
			height: 50px;
			flex-grow: 1;
			// flex-basis: 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
