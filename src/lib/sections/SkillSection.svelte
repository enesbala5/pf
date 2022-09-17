<script lang="ts">
	import {
		frontendSkills,
		designSkills,
		otherSkills,
	} from '$lib/info/skills';
	
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { fade } from 'svelte/transition';

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

	let frontendHover: boolean = false;

	let uiuxHover: boolean = false;
	import { sineInOut } from 'svelte/easing';
	import { create_in_transition } from 'svelte/internal';
	import { preloadImageUrls } from '$lib/state/preloadImageUrls';

	let frontendImage: any;
	let uiUxImage: any;
	let intro: any;
	let introUiUx: any;

	function animateFrontend() {
		if (!intro) {
			intro = create_in_transition(frontendImage, fade, {
				duration: 150,
				easing: sineInOut,
			});
		}
		intro.start();
	}

	function animateUIUX() {
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
</script>

<div
	id="skills"
	class="relative mx-auto mt-64 mb-12 grid scroll-m-20 grid-cols-2 gap-y-8 px-4 text-xl lg:w-10/12 lg:grid-cols-10 lg:gap-2 lg:gap-y-12"
>
	<div
		class="col-start-1 col-end-11 row-start-1 row-end-2 flex w-full items-end justify-between border-b-[1px] border-lightgray pb-4 lg:col-start-auto lg:col-end-auto lg:block lg:border-none lg:pb-0"
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
				{#if frontendSkill.name === 'Sveltekit'}
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
				3D Design & <br class="block lg:hidden" />Sound
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
		class="peer absolute col-span-2 col-start-6 hidden w-full flex-col opacity-0 transition-all delay-75 peer-hover:opacity-100 lg:flex"
	>
		{#each $preloadImageUrls as image, i}
			<div
				class="aspect-square w-full items-center justify-center bg-neutral-800 dark:bg-darkgray {image ===
				hoveredIcon
					? 'flex'
					: 'hidden'}"
			>
				<div class="container h-14" style="max-width: 70%">
					<img src={image} class="img" alt={hoveredIcon} />
				</div>
			</div>
		{/each}
		<p class="mt-4 font-mono text-xs leading-5 opacity-70">
			{hoveredDescription}
		</p>
	</div>
</div>

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

