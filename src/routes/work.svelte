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
	import Surprise from '$lib/svgs/error/Surprise.svelte';
	import { element } from 'svelte/internal';

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	let filtering: boolean = false;

	/**
	 * Checks if array contains all items of another array
	 * @param a searchArguments[]
	 * @param b checked [] if contains searchArguments[]
	 * @returns if B contains all items of A
	 */
	function checkArray(arr: any, arr2: any) {
		return arr.every((i: any) => arr2.includes(i));
	}

	const includesAll = (arr: any[], values: any[]) =>
		values.every((v) => arr.includes(v));

	let errorMessage: boolean = false;
	const checkIfNoMatch = () => {
		let count: number = 0;
		count = 0;
		if ($selectedTags.length > 0) {
			for (let pr of projects) {
				if (includesAll(pr.tags, $selectedTags)) {
					count = count + 1;
				}
			}
			if (count == 0) {
				errorMessage = true;
				return;
			}
		}
		errorMessage = false;
	};

	$: $selectedTags, checkIfNoMatch();
</script>

<title>Work - Enes Bala</title>

<!-- work -->
<div
	class="mx-auto mt-24 w-full font-aeonik lg:w-10/12"
>
	<h1 class="headline mx-4 lg:mx-0">Work</h1>
	<div
		class="relative mx-auto mt-24 text-xl lg:grid lg:grid-cols-10"
	>
		<div
			class="flex mx-4 lg:mx-0 items-center justify-between lg:col-span-10 lg:mb-0 2xl:col-span-9 2xl:col-start-2"
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
					duration: 250,
					easing: quadInOut,
					y: -24,
				}}
				class=" px-4 lg:px-0 noScroll col-span-9 col-start-2 mt-4 grid grid-flow-col-dense grid-rows-1 gap-2 overflow-scroll py-2 text-black dark:text-white lg:mb-0 lg:overflow-hidden "
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
								Apparel Design
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
								Apparel Design
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
		class="relative px-4 lg:px-0 mx-auto mb-12 mt-12 first-letter:text-xl lg:mt-12 lg:grid lg:grid-cols-10 lg:gap-2 lg:gap-y-12"
	>
		{#each projects as project, i}
			<!-- * FILTERS -->
			{#if $selectedTags.length > 0}
				{#if $selectedTags.every((element) => {
					return project.tags.includes(element);
				})}
					<div
						class="flex items-center space-x-2 lg:col-span-10 2xl:col-span-8 2xl:odd:col-start-3 2xl:even:col-start-2"
					in:fly={{x: -100, duration: 250}}

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
			<!-- * END -->
			<!-- * NO FILTERS -->
			{#if $selectedTags.length < 1}
				<div
					class="flex items-center space-x-2 lg:col-span-10 2xl:col-span-8 2xl:odd:col-start-3 2xl:even:col-start-2"
					in:fly={{x: -100, duration: 250}}
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
			<!-- * END -->
		{/each}

		{#key errorMessage}
			{#if errorMessage}
				<div
					in:fly={{x: -100, duration: 250}}
					class="flex min-h-[20vh] flex-col justify-between space-x-2 rounded-md bg-neutral-100 p-4 dark:bg-darkgray sm:flex-row sm:items-center sm:p-6 lg:col-span-10 2xl:col-span-8 2xl:odd:col-start-3 2xl:even:col-start-2"
				>
					<div
						class="h-full items-center justify-center sm:flex sm:justify-start"
					>
						<Surprise
							classNames="sm:h-full h-36 max-h-36 sm:pr-12 p-2 sm:p-0"
						/>
						<p class="hidden sm:inline-block">
							Sorry, there are no projects matching your
							filters.
						</p>
					</div>
					<div class="my-2 mt-8 sm:my-0 sm:mt-0">
						<p class="sm:hidden ">
							Sorry, there are no projects matching your
							filters.
						</p>
						<button
							class="buttonSecondary mt-6 sm:mt-0"
							on:click={() => {
								selectedTags.set([]);
							}}>Clear Filters</button
						>
					</div>
				</div>
			{/if}
		{/key}
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-24 font-aeonik lg:mt-96">
	<Footer parallax={false} />
</div>
