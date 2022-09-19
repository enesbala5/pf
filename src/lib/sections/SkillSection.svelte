<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import {
		frontendSkills,
		designSkills,
		otherSkills,
	} from '$lib/info/skills';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';

	function hoveredOverText() {
		hoverOverText.set(true);
	}
	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	let hoveredIcon = '';
	let hoveredDescription = '';

	const hoverSkill = (
		icon: string,
		description: string = ''
	) => {
		hoveredIcon = `icons/skills/${icon}`;
		hoveredDescription = description;
		showingSkill = false;
	};

	import { preloadImageUrls } from '$lib/state/preloadImageUrls';
	import { browser } from '$app/env';

	let element: any;
	let intersecting: boolean | undefined;
	let showingSkill: boolean = false;

	$: showSkillIfIntersecting(intersecting);
	$: hoveredIcon,
		console.log(hoveredIcon, hoveredDescription);

	const showSkillIfIntersecting = (
		intersect: boolean | undefined
	) => {
		if (intersect === true) {
			console.log('trying');
			console.log(intersecting, hoveredIcon);

			if (intersecting && hoveredIcon === '') {
				setTimeout(() => {
					if (intersecting && hoveredIcon === '') {
						if (browser) {
							hoveredIcon = 'icons/skills/sveltekit.svg';
							hoveredDescription =
								'A framework for building web applications with Svelte, that scale and make no compromises.';
							setTimeout(() => {
								showingSkill = true;
							}, 100);
							document
								.getElementById('skillDisplay')
								?.focus();
						}
					}
				}, 2500);
			}
		}
	};

	$: if (!showingSkill) {
		if (browser)
			document.getElementById('skillDisplay')?.blur();
	}
</script>

<IntersectionObserver
	{element}
	bind:intersecting
	threshold={0.7}
>
	<div
		bind:this={element}
		id="skills"
		class="relative mx-auto mt-64 mb-12 grid scroll-m-48 grid-cols-2 gap-y-8 px-4 text-xl lg:w-10/12 lg:grid-cols-10 lg:gap-2 lg:gap-y-12"
	>
		<div
			class="col-start-1 col-end-11 row-start-1 row-end-2 flex w-full items-end justify-between  pb-4 lg:col-start-auto lg:col-end-auto lg:block lg:border-none lg:pb-0"
		>
			<p class="font-medium">Skills</p>
			<p
				class="mt-2 hidden font-mono text-sm text-black opacity-50 dark:text-white dark:opacity-30 lg:block"
			>
				Tip: Hover / Tap the skills.
			</p>
			<p
				class="font-mono text-xs text-black opacity-50 dark:text-white dark:opacity-30 lg:hidden"
			>
				Tip: View on desktop
			</p>
		</div>

		<!-- Development -->
		<div class="col-start-1 lg:col-span-2 lg:col-start-3">
			<div
				class="w-fit"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			>
				<h3
					class="peer text-lg opacity-70 transition-all delay-75 hover:opacity-100 lg:text-xl"
				>
					Development
				</h3>
				<div
					class="peer mt-0.5 h-0.5 w-1 bg-black opacity-0 transition-all delay-75 peer-hover:w-full peer-hover:opacity-100 dark:bg-white"
				/>
			</div>
		</div>

		<div
			class="peer col-start-9 col-end-11 row-start-2 row-end-3 space-y-2 lg:row-start-1 lg:row-end-2"
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
					<div
						class="invisible h-[1px] w-full bg-lightgray lg:visible"
					/>
					{#if frontendSkill.name === 'Supabase'}
						<p
							class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
						>
							Supabase<span class="hidden 2xl:inline-block">
								/ Postgres Database</span
							>
						</p>
					{/if}
					{#if frontendSkill.name === 'Sveltekit'}
						<p
							class="ml-5  whitespace-nowrap text-right text-sm group-hover:opacity-100 {showingSkill ===
							true
								? 'opacity-100'
								: 'opacity-70'}"
						>
							Sveltekit
						</p>
					{/if}
					{#if frontendSkill.name !== 'Supabase' && frontendSkill.name !== 'Sveltekit'}
						<p
							class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
						>
							{frontendSkill.name}
						</p>
					{/if}
				</div>
			{/each}
		</div>
		<!-- end -->

		<!-- Design -->
		<div class="col-start-1 lg:col-span-2 lg:col-start-3">
			<div
				class="w-fit whitespace-nowrap"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			>
				<h3
					class="peer text-lg opacity-70 transition-all delay-75 hover:opacity-100 lg:text-xl"
				>
					UI/UX Design
				</h3>
				<div
					class="peer mt-0.5 h-0.5 w-1 bg-black opacity-0 transition-all delay-75 peer-hover:w-full peer-hover:opacity-100 dark:bg-white"
				/>
			</div>
		</div>

		<div
			class="peer col-start-9 col-end-11 row-start-3 row-end-4 space-y-2 lg:row-start-2 lg:row-end-3 "
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
					<div
						class="invisible h-[1px] w-full bg-lightgray lg:visible"
					/>
					<p
						class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
					>
						{designSkill.name}
					</p>
				</div>
			{/each}
		</div>
		<!-- end -->

		<!-- 3D Design & Sound -->
		<div class="col-span-2 col-start-1 lg:col-start-3">
			<div
				class="w-fit"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			>
				<h3
					class="peer text-lg opacity-70 transition-all delay-75 hover:opacity-100 lg:text-xl"
				>
					3D Design & <br class="block 2xl:hidden" />Sound
					Design
				</h3>
				<div
					class="peer mt-0.5 h-0.5 w-1 bg-black opacity-0 transition-all delay-75 peer-hover:w-full peer-hover:opacity-100 dark:bg-white"
				/>
			</div>
		</div>

		<div
			class="peer col-start-9 col-end-11 row-start-4 row-end-5 space-y-2 lg:row-start-3 lg:row-end-4 "
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
					<div
						class="invisible h-[1px] w-full bg-lightgray lg:visible"
					/>
					<p
						class="ml-5  whitespace-nowrap text-right text-sm opacity-70 group-hover:opacity-100"
					>
						{otherSkill.name}
					</p>
				</div>
			{/each}
		</div>
		<!-- end -->
		<div
			id="skillDisplay"
			tabindex="-1"
			class="peer absolute col-span-2 col-start-6 hidden w-full flex-col overflow-hidden rounded-md opacity-0 transition-all delay-75 focus:opacity-100 focus:outline-none focus:delay-200 
							peer-hover:opacity-100 lg:flex"
		>
			{#if $preloadImageUrls.includes(hoveredIcon)}
				{#each $preloadImageUrls as image, i}
					<div
						class="aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-black dark:bg-darkgray {image ===
						hoveredIcon
							? 'flex'
							: 'hidden'}"
					>
						<div
							class="container h-14"
							style="max-width: 70%"
						>
							<img
								src={image}
								class="img"
								alt={hoveredIcon}
							/>
						</div>
					</div>
				{/each}
			{:else}
				<div
					class="flex aspect-square w-full items-center justify-center overflow-hidden rounded-md bg-black dark:bg-darkgray"
				>
					<div
						class="container h-14"
						style="max-width: 70%"
					>
						<img
							src={hoveredIcon}
							class="img"
							alt={hoveredIcon}
						/>
					</div>
				</div>
			{/if}
			<p
				class="mt-4 font-mono text-xs leading-5 opacity-70"
			>
				{hoveredDescription}
			</p>
		</div>
	</div>
</IntersectionObserver>

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
