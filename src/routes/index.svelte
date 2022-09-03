<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { logoPanel } from '$lib/info/logoPanel';
	import {
		frontendSkills,
		designSkills,
		otherSkills,
	} from '$lib/info/skills';
	import { projects } from '$lib/projects/projects';
	import { navigation } from '$lib/info/nav';
	import ContactCta from '$lib/components/ContactCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

	function hoveredOverLink() {
		hoverOverLink.set(true);
	}

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	let hovering = false;
	let hoveredIcon = '';
	let hoveredDescription = '';

	const hoverSkill = (
		icon: string,
		description: string = ''
	) => {
		hoveredIcon = `icons/skills/${icon}`;
		hoveredDescription = description;
	};

	let preloadImageUrls: string[] = [];

	function getImagesToPreload() {
		for (let skill of designSkills) {
			preloadImageUrls.push(`icons/skills/${skill.icon}`);
		}
		for (let skill of otherSkills) {
			preloadImageUrls.push(`icons/skills/${skill.icon}`);
		}
		for (let skill of frontendSkills) {
			preloadImageUrls.push(`icons/skills/${skill.icon}`);
		}
		preloadImageUrls.push(
			'images/developer.jpg',
			'images/design.jpg'
		);
		for (let img of preloadImageUrls) console.log(img);
	}

	$: getImagesToPreload();

	let frontendHover: boolean = false;

	let uiuxHover: boolean = false;
	import { sineInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
</script>

<title>Enes Bala - Work Portfolio</title>

<svelte:head>
	{#each preloadImageUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

<!-- infobar -->
<div class="bg-neutral-200 dark:bg-darkgray" id="wrapper">
	<div
		class=" mx-auto grid h-16 grid-cols-10 grid-rows-1 gap-2 px-4 text-xs lg:w-10/12 lg:px-0"
	>
		<div class="col-span-2 flex items-center opacity-70">
			Personal Portfolio Project
		</div>
		<div class="col-span-2 flex items-center opacity-70">
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

<!--  -->
<div
	class="relative mx-auto mb-12 grid h-[70vh] grid-cols-10 grid-rows-6 gap-2 text-xl lg:w-10/12"
>
	{#if frontendHover}
		<div
			transition:fade={{ duration: 250, easing: sineInOut }}
			class="z-10 col-span-6 col-start-5 row-start-1 row-end-6 mb-12 mt-10 flex w-full items-center justify-center overflow-hidden bg-darkgray"
		>
			<img
				src="images/developer.jpg"
				alt="Creating a unique web application, which is fast, beautiful, custom."
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}
	{#if uiuxHover}
		<div
			transition:fade={{ duration: 250, easing: sineInOut }}
			class="z-10 col-span-3 col-start-6 row-start-1 row-end-7 mt-10 flex w-full items-center justify-center overflow-hidden bg-darkgray"
		>
			<img
				src="images/design.jpg"
				alt="UI& UX Design"
				class="h-full w-full object-cover"
			/>
		</div>
	{/if}
	<div
		class="absolute bottom-0 col-span-8 flex w-full flex-col justify-end px-4 lg:px-0"
	>
		<h1 class="headline mb-4">Product Designer</h1>
		<div class="flex w-full items-end justify-between">
			<div>
				<h3
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}
					on:mouseenter={() => (frontendHover = true)}
					on:mouseleave={() => (frontendHover = false)}
					class=" text-4xl font-medium opacity-20 transition-all delay-75 hover:opacity-100"
				>
					Frontend Developer
				</h3>
				<h3
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}
					on:mouseenter={() => (uiuxHover = true)}
					on:mouseleave={() => (uiuxHover = false)}
					class=" text-4xl font-medium opacity-20  transition-all delay-75 hover:opacity-100"
				>
					UI& UX Designer
				</h3>
			</div>

			<a
				href="#skills"
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
			</a>
		</div>
	</div>
</div>
<!-- skills -->
<div
	id="skills"
	class="relative mx-auto mt-44 mb-12 grid w-10/12 scroll-m-20 grid-cols-10 gap-2 gap-y-12 text-xl"
>
	<div class="col-span-2 w-1/2">
		<p class="font-medium">Skills</p>
		<p class="opacity-20">Hover on the skills for more.</p>
	</div>
	<div class="col-span-2 col-start-3">
		<div
			class="w-fit"
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
		>
			<p
				class="peer opacity-70 transition-all delay-75 hover:opacity-100"
			>
				Development
			</p>
			<div
				class="peer mt-0.5 h-0.5 w-1 bg-black opacity-0 transition-all delay-75 peer-hover:w-full peer-hover:opacity-100 dark:bg-white"
			/>
		</div>
	</div>

	<div
		class="peer col-start-9 col-end-11 row-start-1 row-end-2 space-y-2 "
		on:mouseenter={hoveredOverText}
		on:mouseleave={notHovering}
	>
		{#each frontendSkills as frontendSkill}
			<div
				class="group flex w-full items-center justify-between "
				on:mouseenter={() =>
					hoverSkill(
						frontendSkill.icon,
						frontendSkill.description
					)}
			>
				<div class="h-[1px] w-full bg-lightgray" />
				{#if frontendSkill.name !== 'Supabase'}
					<p
						class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
					>
						{frontendSkill.name}
					</p>
				{/if}
				{#if frontendSkill.name === 'Supabase'}
					<p
						class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
					>
						Supabase<span class="hidden lg:inline-block">
							/ Postgres Database</span
						>
					</p>
				{/if}
			</div>
		{/each}
	</div>
	<div class="col-span-2 col-start-3">
		<div
			class="w-fit"
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
		>
			<p
				class="peer opacity-70 transition-all delay-75 hover:opacity-100"
			>
				UI/UX Design
			</p>
			<div
				class="peer mt-0.5 h-0.5 w-1 bg-black opacity-0 transition-all delay-75 peer-hover:w-full peer-hover:opacity-100 dark:bg-white"
			/>
		</div>
	</div>

	<div
		class="peer col-start-9 col-end-11 row-start-2 row-end-3 space-y-2 "
		on:mouseenter={hoveredOverText}
		on:mouseleave={notHovering}
	>
		{#each designSkills as designSkill}
			<div
				class="group flex w-full items-center justify-between"
				on:mouseenter={() =>
					hoverSkill(
						designSkill.icon,
						designSkill.description
					)}
			>
				<div class="h-[1px] w-full bg-lightgray" />
				<p
					class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
				>
					{designSkill.name}
				</p>
			</div>
		{/each}
	</div>

	<div class="col-span-2 col-start-3">
		<div
			class="w-fit"
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
		>
			<p
				class="peer opacity-70 transition-all delay-75 hover:opacity-100"
			>
				3D Design & Sound Design
			</p>
			<div
				class="peer mt-0.5 h-0.5 w-1 bg-black opacity-0 transition-all delay-75 peer-hover:w-full peer-hover:opacity-100 dark:bg-white"
			/>
		</div>
	</div>

	<div
		class="peer col-start-9 col-end-11 row-start-3 row-end-4 space-y-2 "
		on:mouseenter={hoveredOverText}
		on:mouseleave={notHovering}
	>
		{#each otherSkills as otherSkill}
			<div
				class="group flex w-full items-center justify-between"
				on:mouseenter={() =>
					hoverSkill(
						otherSkill.icon,
						otherSkill.description
					)}
			>
				<div class="h-[1px] w-full bg-lightgray" />
				<p
					class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
				>
					{otherSkill.name}
				</p>
			</div>
		{/each}
	</div>

	<div
		class="peer absolute col-span-2 col-start-6 flex w-full flex-col space-y-4 opacity-0 transition-all delay-75 peer-hover:opacity-100"
	>
		<div
			class="flex aspect-square w-full items-center justify-center bg-neutral-300 dark:bg-darkgray"
		>
			<div class="container h-14" style="max-width: 70%">
				<img src={hoveredIcon} class="img" alt="" />
			</div>
		</div>
		<p class="font-mono text-xs leading-5 opacity-70">
			{hoveredDescription}
		</p>
	</div>
</div>
<!-- project images -->
{#if browser}
	<AnimateSharedLayout children>
		<Motion
			let:motion
			transition={{ duration: 0.5 }}
			layout
			onHoverStart={() => (hovering = true)}
			onHoverEnd={() => (hovering = false)}
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
						class="col-span-6  row-start-1 row-end-2 h-[70vh] {hovering
							? 'col-start-5'
							: 'col-start-3'}"
					>
						<div
							class="h-full w-full bg-neutral-300 dark:bg-darkgray"
						/>
						<p class="mt-2 font-mono opacity-50">
							Project FirstLast™
						</p>
					</div>
				</Motion>
				<Motion
					let:motion={m2}
					transition={{ duration: 0.5 }}
					layout
				>
					<div
						use:m2
						class="z-20  col-span-4 row-start-1 row-end-2 flex h-[70vh] flex-col justify-center {hovering
							? 'col-start-1'
							: 'col-start-7'}"
					>
						<div
							class="h-[40vh] w-full bg-neutral-200 dark:bg-lightgray "
						/>
						<p class="mt-2 font-mono opacity-50">
							2018 Enes Bala
						</p>
					</div>
				</Motion>
			</div>
		</Motion>
	</AnimateSharedLayout>
{/if}
<!-- projects -->
<div
	class="relative mx-auto mt-44 mb-12 grid w-10/12 grid-cols-10 gap-2 gap-y-12 text-xl"
>
	<!-- titlebar -->
	<div class="col-span-2">
		<p class="font-medium">Projects</p>
	</div>
	<div class=" col-span-3 col-start-3">
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
				class="col-span-8 flex items-center space-x-2  odd:col-start-3 even:col-start-2"
			>
				<ProjectCard
					projectName={project.projectName}
					projectDescription={project.projectDescription}
					category={project.category}
					projectId={project.id}
				/>
			</div>
		{/if}
	{/each}
</div>
<!-- logo panel -->
<div class="my-12 mt-44 bg-neutral-300 dark:bg-darkgray">
	<div class="mx-auto flex w-10/12 justify-between py-8">
		{#each logoPanel as logo}
			<a
				on:mouseenter={hoveredOverLink}
				on:mouseleave={notHovering}
				href={logo.link}
				class="h-12 cursor-none opacity-70 transition-all delay-75 hover:opacity-100"
				><img
					class="h-full"
					src={logo.logo}
					alt={logo.name}
				/></a
			>
		{/each}
	</div>
</div>
<!-- contact CTA -->
<ContactCta />
<!-- footer -->
<Footer />

<style>
	.container {
		overflow: hidden;
		width: 300px;
	}
	.img {
		object-fit: contain;
		height: 100%;
		width: 100%;
	}
</style>
