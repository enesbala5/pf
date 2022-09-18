<script lang="ts">
	import { cityName } from '$lib/info/info';
	import { navigation } from '$lib/info/nav';

	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { theme } from '$lib/state/theme';
	import Stars from '$lib/svgs/Stars.svelte';
	import LineUnderText from './LineUnderText.svelte';
	import ProjectContainer from './project/containers/ProjectContainer.svelte';
	import FooterLogo from './project/footer/footerLogo.svelte';
	import ParallaxContainer from './project/ParallaxContainer.svelte';

	let innerWidth: number = 1600;
</script>

<svelte:window bind:innerWidth />

<!-- lg: only -->

{#if innerWidth > 1024}
	<div
		class="bg-black dark:bg-white"
		style="--textColor:{$theme === 'dark'
			? 'white'
			: 'black'};--backgroundColor:{$theme === 'dark'
			? 'white'
			: 'black'}"
	>
		<ParallaxContainer topMargin={false}>
			<ProjectContainer
				widthNotDefined
				customMargin="bg-black dark:bg-darkgray h-full text-white dark:text-white"
			>
				<footer class="mx-auto h-[90%]">
					<div class="mx-auto flex h-full w-10/12 flex-col">
						<div class="flex h-full w-full items-center">
							<div class="w-1/2">
								<h2 class="text-8xl ">Have an idea?</h2>
								<LineUnderText
									noHover
									custom
									lineColor="white"
									centralOpacity="opacity-20 dark:opacity-10"
									central
								>
									<a
										href={navigation.contact}
										class="text-8xl font-light"
									>
										Get in touch
									</a>
								</LineUnderText>
							</div>
							<div class="w-1/2 h-full flex items-center justify-end ">
								<Stars classNames="mt-12 h-2/3 fill-none stroke-white" />
							</div>
						</div>

						<div class="h-1/6 w-full">
							<div class="my-4 opacity-50 hover:opacity-100 delay-75">
								<LineUnderText
									noHover
									lineColor="white"
									central
									centralOpacity="opacity-0"
									link
									text="contact@enesbala.com"
									linkUrl={'mailto:contact@enesbala.com'}
								/>
							</div>
						</div>
						<!-- <div>
							<p>{cityName}, Albania</p>
						</div> -->
					</div>
				</footer>
				<div class="h-[10%] bg-white">
					<div class="mx-auto flex h-full w-10/12  items-center">
					<FooterLogo classNames="h-4 fill-black" />

					</div>
				</div>
			</ProjectContainer>
		</ParallaxContainer>
	</div>
{/if}

{#if innerWidth < 1024}
	<div
		style="--textColor:{$theme === 'dark'
			? 'white'
			: 'black'};--backgroundColor:{$theme === 'dark'
			? 'white'
			: 'black'}"
	>
		<ProjectContainer
			widthNotDefined
			customMargin="bg-black dark:bg-darkgray h-full text-white dark:text-black py-24"
		>
			<div class="flex h-2/3 w-full flex-col">
				<div class="flex flex-col items-center">
					<h2 class="text-xl leading-normal ">
						Have an idea?
					</h2>
					<LineUnderText custom lineColor={'white'} central>
						<a
							href={navigation.contact}
							class="text-4xl font-light leading-normal"
						>
							Get in touch
						</a>
					</LineUnderText>
				</div>
			</div>

			<div
				class="mt-12 flex h-1/3 w-full flex-col items-center"
			>
				<div class="my-4">
					<LineUnderText
						central
						lineColor="black"
						link
						text="contact@enesbala.com"
						centralOpacity="opacity-20 dark:opacity-10"
						linkUrl={'mailto:contact@enesbala.com'}
					/>
				</div>
				<div>
					<p>{cityName}, Albania</p>
				</div>
			</div>
		</ProjectContainer>
	</div>
{/if}

<style>
	:global(:root) {
		--textColor: inherit;
		--backgroundColor: inherit;
	}

	:global(::-moz-selection) {
		color: var(--textColor);
		background: var(--backgroundColor);
	}

	:global(::selection) {
		color: var(--textColor);
		background: var(--backgroundColor);
	}
</style>
