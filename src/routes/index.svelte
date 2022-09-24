<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { logoPanel } from '$lib/info/logoPanel';
	import { projects } from '$lib/projects/projects';
	import { navigation } from '$lib/info/nav';
	import ContactCta from '$lib/components/ContactCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let uiuxHover: boolean = false;
	import { sineInOut, sineIn } from 'svelte/easing';
	import { create_in_transition } from 'svelte/internal';
	import SkillSection from '$lib/sections/SkillSection.svelte';
	import IntersectionObserver from 'svelte-intersection-observer';

	import {
		Motion,
		AnimateSharedLayout,
	} from 'svelte-motion';
	import { browser } from '$app/env';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { fade } from 'svelte/transition';
	import ImageCard from '$lib/components/project/ImageCard.svelte';
	import LogoSlider from '$lib/components/LogoSlider.svelte';
	import Keyboard from '$lib/svgs/hero/Keyboard.svelte';
	import Palette from '$lib/svgs/hero/Palette.svelte';

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	let hovering = false;

	let frontendHover: boolean = false;

	let frontendImage: any;
	let uiUxImage: any;
	let intro: any;
	let introUiUx: any;

	function animateFrontend() {
		heroItemsHovered = true;
		uiuxHover = false;
		if (!intro) {
			intro = create_in_transition(frontendImage, fade, {
				duration: 150,
				easing: sineIn,
				delay: 0,
			});
		}
		intro.start();
	}

	function animateUIUX() {
		heroItemsHovered = true;
		frontendHover = false;
		if (!introUiUx) {
			introUiUx = create_in_transition(uiUxImage, fade, {
				duration: 150,
				easing: sineInOut,
			});
		}
		introUiUx.start();
	}

	$: if (frontendHover) {
		animateFrontend();
	}
	$: if (uiuxHover) {
		animateUIUX();
	}

	$: if (intersectingHero && !heroItemsHovered) {
		setTimeout(() => {
			frontendHover = true;
		}, 1000);
	}

	let heroItemsHovered: boolean = false;
	let element: any;
	let hero: any;
	let intersecting: any;
	let intersectingHero: any;

	$: intersectingHero, console.log(intersectingHero);
	$: intersecting, (hovering = intersecting);
</script>

<title>Enes Bala - Work Portfolio</title>

<!-- infobar -->
<div
	class="bg-neutral-200 transition-colors delay-150 ease-in-out dark:bg-darkgray"
	id="wrapper"
>
	<div
		class=" mx-auto grid h-16 grid-rows-1 gap-2 px-4 text-xs md:grid-cols-10 lg:w-10/12 lg:px-0"
	>
		<div class="col-span-2 flex items-center opacity-70">
			Personal Portfolio Project
		</div>
		<div
			class="col-span-2 hidden items-center opacity-70 md:flex"
		>
			Enes Bala
		</div>
		<div
			class="col-start-9 col-end-11 flex items-center justify-end opacity-70"
		>
			2022©
		</div>
	</div>
</div>

<!-- hero -->
<IntersectionObserver
	element={hero}
	bind:intersecting={intersectingHero}
	threshold={0.7}
>
	<div
		bind:this={hero}
		class="relative mx-auto mb-12 grid h-[75vh] grid-cols-10 grid-rows-6 gap-2 text-xl lg:w-10/12"
	>
		<div
			bind:this={frontendImage}
			class="z-10 col-span-7 col-start-4 row-start-2 row-end-6 mb-10 mt-10 flex w-full items-center justify-center overflow-hidden  transition-opacity delay-75 ease-out {frontendHover
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<Keyboard red />
		</div>
		<div
			bind:this={uiUxImage}
			class="z-10 col-span-3 col-start-7 row-start-1 row-end-6 mt-24 w-full items-center justify-center overflow-hidden  transition-opacity delay-75 ease-out {uiuxHover
				? 'opacity-100'
				: 'opacity-0'}"
		>
			<Palette red />
		</div>
		<div
			class="absolute bottom-0 col-span-8 flex w-full flex-col justify-end px-4 lg:px-0"
		>
			<h1 class="headline mb-4">Product Designer</h1>
			<div class="flex w-full items-end justify-between">
				<div>
					<h3
						on:mouseenter={() => {
							heroItemsHovered = true;
							frontendHover = true;
							hoveredOverLink();
						}}
						on:mouseleave={() => {
							frontendHover = false;
							notHovering();
						}}
						class=" text-4xl font-medium  transition-all delay-75 hover:opacity-90
							{frontendHover ? 'opacity-90' : 'opacity-30'}"
					>
						Frontend Developer
					</h3>
					<h3
						on:mouseenter={() => {
							heroItemsHovered = true;
							uiuxHover = true;
							hoveredOverLink();
						}}
						on:mouseleave={() => {
							uiuxHover = false;
							notHovering();
						}}
						class=" text-4xl font-medium transition-all delay-75 hover:opacity-90
						{uiuxHover ? 'opacity-90' : 'opacity-30'}"
					>
						UI& UX Designer
					</h3>
				</div>
				<!-- chevron bottom - navigate down -->
				<div
					on:keydown={() => {
						if (browser) {
							document
								.querySelector('#skills')
								?.scrollIntoView({
									behavior: 'smooth',
								});
						}
					}}
					on:click={() => {
						if (browser) {
							document
								.querySelector('#skills')
								?.scrollIntoView({
									behavior: 'smooth',
								});
						}
					}}
					tabindex="0"
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</IntersectionObserver>

<!-- skills -->
<SkillSection />

<!-- ? project images -->
<IntersectionObserver
	{element}
	bind:intersecting
	threshold={0.7}
>
	<div class="my-64 hidden lg:block" bind:this={element}>
		{#if browser}
			<AnimateSharedLayout children>
				<Motion
					let:motion
					transition={{ duration: 1 }}
					layout
				>
					<div
						use:motion
						class="relative mx-auto mt-44 mb-12 grid w-10/12 grid-cols-10 grid-rows-1 gap-2 text-xs"
					>
						<Motion
							let:motion={m1}
							transition={{ duration: 0.5 }}
							layout
						>
							<div
								use:m1
								class="col-span-6  row-start-1 row-end-2 h-[70vh] overflow-hidden rounded-md {hovering
									? 'col-start-5'
									: 'col-start-3'}"
							>
								<ImageCard
									customAttribute="w-full"
									imageCustomAttribute=" mt-8"
									image="/images/showcase/rubik_bigImage.jpg"
									alternativeImage
								/>
							</div>
						</Motion>
						<Motion
							let:motion={m2}
							transition={{ duration: 0.5 }}
							layout
						>
							<div
								use:m2
								class="z-20  col-span-4 row-start-1 row-end-2 flex h-[70vh] flex-col justify-center overflow-hidden {hovering
									? 'col-start-1'
									: 'col-start-7'}"
							>
								<ImageCard
									customAttribute="w-full"
									image="/images/showcase/laptop_smallImage.jpg"
									alternativeImage
								/>
							</div></Motion
						>
					</div>
				</Motion>
			</AnimateSharedLayout>
		{/if}
	</div>
</IntersectionObserver>

<!-- ? projects -->
<div
	class="relative mx-auto mt-64 mb-12 flex flex-col px-4 text-lg lg:mt-44 lg:grid lg:w-10/12 lg:grid-cols-10 lg:gap-2 lg:gap-y-12 lg:px-0 lg:text-xl"
>
	<!-- titlebar -->
	<!-- end mobile only -->
	<div
		class="mb-4 flex items-center justify-between pb-4 lg:hidden"
	>
		<div class="">
			<p class="font-medium">Projects</p>
		</div>
		<div class="">
			<div class="flex items-center space-x-4 opacity-70">
				<a
					href={navigation.work}
					class="text-base opacity-70"
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}>View all</a
				>
			</div>
		</div>
	</div>
	<!-- end mobile only -->
	<div class="hidden lg:col-span-2 lg:block">
		<p class="font-medium">Projects</p>
	</div>
	<div
		class=" hidden lg:col-span-3 lg:col-start-3 lg:block"
	>
		<div class="flex items-center space-x-4 opacity-70">
			<a
				href={navigation.work}
				class="text-base opacity-70"
				on:mouseenter={hoveredOverLink}
				on:mouseleave={notHovering}>View all</a
			>
		</div>
	</div>

	<!-- end titlebar -->

	<!-- project -->
	{#each projects as project, i}
		{#if i < 3}
			<div
				class="col-span-8 flex items-center space-x-2 odd:col-start-2 even:col-start-3"
			>
				<ProjectCard
					projectName={project.projectName}
					projectDescription={project.projectDescription}
					date={project.date}
					tags={project.tags}
					projectId={project.id}
					thumbnail={project.thumbnail}
				/>
			</div>
		{/if}
	{/each}
</div>

<LogoSlider />
<!-- <ContactCta /> -->
<Footer />
