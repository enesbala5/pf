<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import {
		projects,
		selectedTags,
	} from '$lib/projects/projects';
	import type { Tag } from 'src/types';

	const tags: Tag[] = [
		'branding',
		'ui-ux',
		'smmm',
		'tshirt',
		'website',
		'development',
	];

	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	let filtering: boolean = false;
</script>

<title>Work - Enes Bala</title>

<!-- work -->
<div
	class="mx-auto mt-24 w-full px-4 font-aeonik lg:w-10/12 lg:px-0"
>
	<h1 class="headline">Work</h1>
	<div
		class="relative mx-auto mt-24 text-xl lg:grid lg:grid-cols-10"
	>
		<div
			class="2xl:col-span-9 lg:col-span-10 2xl:col-start-2 flex items-center justify-between lg:mb-0"
		>
			<!-- titlebar -->
			<div class="col-span-2 col-start-2">
				<p class="font-medium">All categories</p>
			</div>
			<div
				class="col-span-6 col-start-5 flex cursor-pointer justify-end lg:cursor-none"
			>
				<div
					class="flex cursor-pointer items-center space-x-4 opacity-70 lg:cursor-none"
					on:mouseenter={hoveredOverText}
					on:click={() => (filtering = !filtering)}
					on:mouseleave={notHovering}
				>
					<p class="text-base">Filter</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 transition-transform {filtering
							? 'rotate-180'
							: ''} delay-75"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
		</div>
		{#if filtering}
			<div
				transition:fly={{
					duration: 150,
					easing: quadInOut,
					y: -24,
				}}
				class="noScroll col-span-9 col-start-2 mt-4 grid grid-flow-col-dense grid-rows-1 gap-2 overflow-scroll lg:overflow-hidden py-2 text-black dark:text-white lg:mb-0 "
			>
				{#each tags as tag}
					{#if $selectedTags.includes(tag) && tag !== 'tshirt'}
						<div
							class="w-fit whitespace-nowrap rounded-full bg-black py-2 px-4 text-center font-mono text-xs text-white dark:bg-white dark:text-black lg:w-full"
							on:click={() => {
								$selectedTags = $selectedTags.filter(
									(item) => item !== tag
								);
							}}
							on:mouseenter={hoveredOverText}
							on:mouseleave={notHovering}
						>
							{#if tag === 'branding'}
								Branding
							{/if}
							{#if tag === 'smmm'}
								Social Media Management
							{/if}
							{#if tag === 'ui-ux'}
								UI & UX
							{/if}
							<!-- {#if tag === 'tshirt'}
								Clothing
							{/if} -->
							{#if tag === 'website'}
								Website Design
							{/if}
							{#if tag === 'development'}
								Development
							{/if}
						</div>
					{/if}
					{#if $selectedTags.includes(tag) === false && tag !== 'tshirt'}
						<div
							on:click={() => {
								$selectedTags = [tag, ...$selectedTags];
							}}
							on:mouseenter={hoveredOverText}
							on:mouseleave={notHovering}
							class="w-fit whitespace-nowrap rounded-full bg-white py-2 px-4 text-center font-mono text-xs shadow-sm dark:bg-lightgray dark:shadow-none lg:w-full"
						>
							{#if tag === 'branding'}
								Branding
							{/if}
							{#if tag === 'smmm'}
								Social Media Management
							{/if}
							{#if tag === 'ui-ux'}
								UI & UX
							{/if}
							<!-- {#if tag === 'tshirt'}
								Clothing
							{/if} -->
							{#if tag === 'website'}
								Website Design
							{/if}
							{#if tag === 'development'}
								Development
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
	<!-- end titlebar -->

	<!-- project -->
	<div
		class="relative mx-auto mb-12 mt-12 first-letter:text-xl lg:mt-12 lg:grid lg:grid-cols-10 lg:gap-2 lg:gap-y-12"
	>
		{#each projects as project, i}
			{#if $selectedTags.length > 0}
				{#if $selectedTags.every((element) => {
					return project.tags.includes(element);
				})}
					<div
						class="2xl:col-span-8 lg:col-span-10 flex items-center space-x-2 2xl:odd:col-start-3 2xl:even:col-start-2"
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
			{/if}
			{#if $selectedTags.length < 1}
				<div
					class="2xl:col-span-8 lg:col-span-10 flex items-center space-x-2 2xl:odd:col-start-3 2xl:even:col-start-2"
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
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-24 font-aeonik lg:mt-96">
	<Footer />
</div>
