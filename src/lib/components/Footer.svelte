<script lang="ts">
	import { browser } from '$app/environment';
	import { darkMode } from '$lib/info/darkMode';
	import { cityName } from '$lib/info/info';
	import { navigation } from '$lib/info/nav';

	import { hoverOverLink, hoverOverText } from '$lib/state/hoverOver';
	import Stars from '$lib/svgs/Stars.svelte';
	import LineUnderText from './LineUnderText.svelte';
	import ProjectContainer from './project/containers/ProjectContainer.svelte';
	import FooterLogo from './project/footer/footerLogo.svelte';
	import ParallaxContainer from './project/ParallaxContainer.svelte';

	let innerWidth: number = 1600;

	let hovering: boolean = false;

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	export let parallax: boolean = true;
</script>

<svelte:window bind:innerWidth />

<!-- lg: only -->

{#if innerWidth > 1024}
	<div
		class="bg-black dark:bg-darkgray"
		style="--textColor:{$darkMode ? 'white' : 'black'};--backgroundColor:{$darkMode
			? 'white'
			: 'black'}"
	>
		<ParallaxContainer topMargin={false} {parallax}>
			<ProjectContainer
				widthNotDefined
				customMargin="bg-black dark:bg-darkgray h-full text-white dark:text-white"
			>
				<footer class="mx-auto h-[92%]">
					<div class="mx-auto flex h-full w-10/12 flex-col">
						<div class="flex w-full grow items-center">
							<div class="w-full 2xl:w-1/2">
								<h2 class="footerH1">Have an idea?</h2>
								<LineUnderText
									noHover
									custom
									lineColor="white"
									centralOpacity="opacity-20 dark:opacity-10"
									central
								>
									<a
										href={navigation.contact}
										class="footerH1 font-light"
										on:mouseenter={() => (hovering = true)}
										on:mouseleave={() => (hovering = false)}
									>
										Get in touch
									</a>
								</LineUnderText>
							</div>
							<div class=" hidden h-full w-1/2 items-center justify-end 2xl:flex ">
								<Stars
									classNames={`mt-12 w-2/3 h-full fill-transparent stroke-lightgray stroke-2 ${
										hovering ? '' : ''
									}`}
								/>
							</div>
						</div>

						<!-- <div>
							<p>{cityName}, Albania</p>
						</div> -->
						<div class="grid w-full grid-cols-10 grid-rows-1 gap-2 py-8 2xl:h-[16%]">
							<div class="col-span-3  2xl:col-span-2">
								<p class="mb-2 text-sm opacity-50">Contact through Email:</p>
								<LineUnderText
									noHover
									lineColor="white"
									textSm
									link
									text="contact@enesbala.com"
									linkUrl={'mailto:contact@enesbala.com'}
								/>
							</div>
							<div class="col-span-6 ">
								<p class="mb-2 text-sm opacity-50">Where you can find me:</p>
								<div class="flex items-center space-x-12">
									<LineUnderText
										noHover
										textSm
										lineColor="white"
										link
										text="Mobile Phone"
										linkUrl={'tel:+355682415881'}
									/>
									<LineUnderText
										noHover
										textSm
										lineColor="white"
										link
										text="WhatsApp"
										linkUrl={'https://api.whatsapp.com/send?phone=355682415881'}
									/>
									<LineUnderText
										noHover
										textSm
										lineColor="white"
										link
										text="Linkedin"
										linkUrl={'https://www.linkedin.com/in/enesbala/'}
									/>
								</div>
							</div>
							<div class="col-span-1 col-start-10 col-end-11 flex h-14 items-center justify-end ">
								<div
									class="group rounded-full bg-brand p-4 transition-colors ease-linear hover:-translate-y-0.5"
									on:mouseenter={hoveredOverLink}
									on:mouseleave={notHovering}
									on:keydown={() => {
										if (browser) {
											document.querySelector('#skills')?.scrollIntoView({
												behavior: 'smooth',
											});
										}
									}}
									on:click={() => {
										if (browser) {
											document.querySelector('body')?.scrollIntoView({
												behavior: 'smooth',
											});
										}
									}}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="h-6 w-6"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</footer>

				<div
					class="h-[8%] rounded-t-full bg-darkgray text-white dark:bg-lightgray dark:text-white"
					id="wrapper"
				>
					<div class=" mx-auto grid h-full w-10/12 grid-cols-10 grid-rows-1 gap-2 px-0 text-sm">
						<div class="col-span-3 flex items-center opacity-70 2xl:col-span-2">
							<FooterLogo classNames="h-4 fill-white dark:fill-white" />
						</div>
						<div class="col-span-5 flex items-center opacity-70">
							<p class="opacity-70">Iconography by</p>
							<a
								on:mouseenter={hoveredOverLink}
								on:mouseleave={notHovering}
								target="_blank"
								rel="noopener noreferrer"
								class="mx-1"
								href="https://thenounproject.com/sean.maldjian/">Sean Maldjian</a
							>
							<p class="opacity-70">on</p>
							<a
								on:mouseenter={hoveredOverLink}
								on:mouseleave={notHovering}
								target="_blank"
								rel="noopener noreferrer"
								class="mx-1"
								href="https://thenounproject.com/">Noun Project</a
							>
						</div>
						<div class="col-start-9 col-end-11 flex items-center justify-end opacity-70">
							2023&trade;
						</div>
					</div>
				</div>
			</ProjectContainer>
		</ParallaxContainer>
	</div>
{/if}

{#if innerWidth < 1024}
	<div
		style="--textColor:{$darkMode ? 'white' : 'black'};--backgroundColor:{$darkMode
			? 'white'
			: 'black'}"
	>
		<div class="relative h-full bg-black pt-24 text-white dark:bg-darkgray">
			<div class="flex h-2/3 w-full flex-col">
				<div class="flex flex-col items-center">
					<h2 class="text-3xl leading-normal ">Have an idea?</h2>
					<LineUnderText custom lineColor={'white'} central>
						<a href={navigation.contact} class="text-5xl font-light leading-normal">
							Get in touch
						</a>
					</LineUnderText>
				</div>
			</div>

			<div class="mt-12 flex h-1/3 w-full flex-col items-center">
				<div class="my-4">
					<LineUnderText
						central
						lineColor="white"
						link
						text="contact@enesbala.com"
						centralOpacity="opacity-20 dark:opacity-10"
						linkUrl={'mailto:contact@enesbala.com'}
					/>
				</div>
				<div class="flex items-center space-x-4">
					<!-- Phone Icon -->
					<a
						href="tel:+355682415881"
						class="group flex items-center justify-center"
						aria-details="Phone Number"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 fill-lightgray group-hover:fill-black"
							viewBox="0 0 512 512"
						>
							<g id="Group_16" data-name="Group 16" transform="translate(-5411 -1960)">
								<path
									id="Path_51"
									data-name="Path 51"
									d="M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0Z"
									transform="translate(5411 1960)"
									fill-rule="evenodd"
								/>
								<path
									id="Subtraction_1"
									data-name="Subtraction 1"
									d="M296.148,320a200.779,200.779,0,0,1-40.277-4.073,198.855,198.855,0,0,1-37.538-11.68,200.356,200.356,0,0,1-33.988-18.476,201.191,201.191,0,0,1-72.555-88.107A199.085,199.085,0,0,1,100.113,160.1a201.093,201.093,0,0,1-4.073-40.308,13.585,13.585,0,0,1,10.6-13.318L150.717,96.3a13.634,13.634,0,0,1,3.079-.354,13.794,13.794,0,0,1,12.61,8.282l20.36,47.5a13.687,13.687,0,0,1-3.93,15.943L159.266,187a153.484,153.484,0,0,0,69.8,69.783l19.267-23.547a13.547,13.547,0,0,1,4.765-3.738,13.774,13.774,0,0,1,5.818-1.3,13.458,13.458,0,0,1,5.377,1.113l47.458,20.344a13.733,13.733,0,0,1,7.9,15.658L309.483,309.4A13.6,13.6,0,0,1,296.148,320Z"
									transform="translate(5458.96 2008.054)"
									fill="#fff"
								/>
							</g>
						</svg>
					</a>
					<!-- WhatsApp Icon -->
					<a
						href="https://api.whatsapp.com/send?phone=355682415881"
						class="group flex items-center justify-center"
						aria-details="Whatsapp"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 fill-lightgray group-hover:fill-black"
							viewBox="0 0 512 512"
						>
							<g id="Group_17" data-name="Group 17" transform="translate(-6050 -1960)">
								<path
									id="Path_52"
									data-name="Path 52"
									d="M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0Z"
									transform="translate(6050 1960)"
									fill-rule="evenodd"
								/>
								<path
									id="Subtraction_2"
									data-name="Subtraction 2"
									d="M99.024,414.72l23.027-84.086a161.937,161.937,0,0,1-21.666-81.122c.035-89.468,72.851-162.256,162.319-162.256a162.322,162.322,0,0,1,162.32,162.385c-.036,89.474-72.851,162.266-162.317,162.266h-.067a162.248,162.248,0,0,1-77.567-19.751L99.024,414.72h0Zm90.033-51.942v0h0l4.927,2.922a134.749,134.749,0,0,0,68.667,18.8h.054c74.36,0,134.881-60.5,134.912-134.87A134.917,134.917,0,0,0,262.76,114.661c-74.393,0-134.94,60.5-134.969,134.861A134.522,134.522,0,0,0,148.418,321.3l3.208,5.1L138,376.169ZM304.9,327.564h0a51.1,51.1,0,0,1-15.7-2.384,233.391,233.391,0,0,1-23.121-8.541,129.112,129.112,0,0,1-26.067-15.35A177.031,177.031,0,0,1,219.358,283,210.409,210.409,0,0,1,197.5,256.429c-.337-.483-.58-.832-.714-1.011l-.035-.047a98.662,98.662,0,0,1-9.071-14.584,77.763,77.763,0,0,1-5.176-12.8,51.089,51.089,0,0,1-2.279-14.515,46.172,46.172,0,0,1,5.116-21.8,49.387,49.387,0,0,1,8.284-11.172l.026-.027c.276-.295.538-.574.769-.826a15.791,15.791,0,0,1,5.788-4.059,13.62,13.62,0,0,1,5.027-1.015c2.284,0,5.231.016,7.773.143.169.008.354.012.6.012h.636a6.187,6.187,0,0,1,3.769.977c1.53,1.035,2.878,2.989,4.12,5.974,1.113,2.673,2.737,6.625,4.456,10.809l.02.048c3.445,8.385,7.351,17.889,8.029,19.248a7.486,7.486,0,0,1,.338,7.1c-.2.4-.384.776-.562,1.139l-.005.011a22.991,22.991,0,0,1-3.489,5.613c-.676.789-1.383,1.65-2.067,2.483-1.377,1.677-2.8,3.408-4.016,4.62-1.958,1.949-4.177,4.158-1.778,8.275,2.91,4.991,10.934,17.718,22.563,28.087a105.416,105.416,0,0,0,29.938,18.919c1.126.488,2.015.874,2.678,1.2a10.071,10.071,0,0,0,4.416,1.305,5.623,5.623,0,0,0,4.371-2.32c2-2.285,10.034-11.681,12.843-15.9,1.417-2.128,2.889-3.077,4.772-3.077a13.416,13.416,0,0,1,4.352,1.047c3.632,1.322,23.074,10.87,27.715,13.191.791.4,1.516.746,2.216,1.085l.005,0c2.852,1.378,4.736,2.288,5.552,3.649.987,1.648,1.044,9.722-2.366,19.28-1.5,4.217-5.778,8.747-12.033,12.755-5.233,3.353-11.255,5.914-15.342,6.525A66.119,66.119,0,0,1,304.9,327.564Z"
									transform="translate(6050 1960)"
									fill="#fff"
								/>
							</g>
						</svg>
					</a>
					<!-- Linkedin Icon -->
					<a
						href="https://www.linkedin.com/in/enesbala/"
						aria-details="Linkedin"
						class="group flex items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-10 w-10 fill-lightgray group-hover:fill-black"
							viewBox="0 0 512 512"
						>
							<g id="Group_18" data-name="Group 18" transform="translate(-6850 -1960)">
								<path
									id="Path_49"
									data-name="Path 49"
									d="M256,0C397.29,0,512,114.71,512,256S397.29,512,256,512,0,397.29,0,256,114.71,0,256,0ZM175.963,399.871V199.95H109.5V399.871Zm239.62,0V285.225c0-61.409-32.787-89.976-76.509-89.976-35.255,0-51.047,19.389-59.889,33.007V199.95H212.738c.881,18.757,0,199.921,0,199.921h66.446V288.221c0-5.976.43-11.95,2.191-16.221,4.8-11.935,15.737-24.3,34.1-24.3,24.034,0,33.663,18.34,33.663,45.2V399.871h66.45ZM143.18,103.55c-22.74,0-37.6,14.95-37.6,34.545,0,19.182,14.4,34.544,36.717,34.544h.429c23.175,0,37.6-15.362,37.6-34.544-.43-19.6-14.424-34.545-37.149-34.545Z"
									transform="translate(6850 1960)"
									fill-rule="evenodd"
								/>
								<path
									id="Subtraction_3"
									data-name="Subtraction 3"
									d="M415.583,399.872h-66.45V292.9c0-14.067-2.631-25.061-7.819-32.676-5.664-8.313-14.359-12.528-25.845-12.528-22.577,0-31.8,18.6-34.095,24.3-1.5,3.626-2.192,8.78-2.192,16.222v111.65H212.738c.009-1.794.867-181.444,0-199.921h66.447v28.306c4.249-6.545,10.369-14.915,20.039-21.61a61.365,61.365,0,0,1,16.862-8.155,77.974,77.974,0,0,1,22.987-3.242,82.555,82.555,0,0,1,30.4,5.423,65.227,65.227,0,0,1,24.251,16.537,76.468,76.468,0,0,1,16.053,28.051c3.853,11.6,5.806,25.049,5.806,39.966V399.871Zm-239.62,0H109.5V199.95h66.463V399.871ZM142.729,172.639H142.3a41.752,41.752,0,0,1-15.15-2.7A33.3,33.3,0,0,1,105.583,138.1a35.046,35.046,0,0,1,2.677-13.664,32.053,32.053,0,0,1,7.594-10.956,34.835,34.835,0,0,1,11.858-7.282,44.234,44.234,0,0,1,15.468-2.642c10.912,0,20.226,3.432,26.935,9.924a32.485,32.485,0,0,1,7.424,10.956,37.6,37.6,0,0,1,2.79,13.664,35.047,35.047,0,0,1-2.616,13.49,32.186,32.186,0,0,1-7.493,10.975,34.608,34.608,0,0,1-11.839,7.379A44.2,44.2,0,0,1,142.729,172.639Z"
									transform="translate(6850 1960)"
									fill="#fff"
								/>
							</g>
						</svg>
					</a>
				</div>
			</div>
			<div
				class="mt-16 min-h-fit rounded-t-3xl bg-darkgray py-4 text-white dark:bg-lightgray dark:text-white"
			>
				<div class="mx-auto flex h-full flex-col items-center px-4 text-sm">
					<div class=" flex items-center py-4 opacity-70">
						<FooterLogo classNames="h-4 fill-white dark:fill-white" />
					</div>
					<div
						class="  mt-4 flex w-full items-center justify-center rounded-full bg-black bg-opacity-20 p-2 opacity-70"
					>
						<p class="opacity-70">Iconography by</p>
						<a
							on:mouseenter={hoveredOverLink}
							on:mouseleave={notHovering}
							target="_blank"
							rel="noopener noreferrer"
							class="mx-1"
							href="https://thenounproject.com/sean.maldjian/">Sean Maldjian</a
						>
						<p class="opacity-70">on</p>
						<a
							on:mouseenter={hoveredOverLink}
							on:mouseleave={notHovering}
							target="_blank"
							rel="noopener noreferrer"
							class="mx-1"
							href="https://thenounproject.com/">Noun Project</a
						>
					</div>
				</div>
			</div>
		</div>
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
