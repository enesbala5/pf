<script lang="ts">
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import '../app.css';
	import { Svrollbar } from 'svrollbar';
	import Navbar from '$lib/components/Navbar.svelte';
	import { spring } from 'svelte/motion';
	import { hoverOverLink, hoverOverText } from '$lib/state/hoverOver';
	import { fade } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';
	import { designSkills, frontendSkills, otherSkills } from '$lib/info/skills';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import { preloadImageUrls } from '$lib/state/preloadImageUrls';
	import { onMount } from 'svelte';
	import { theme } from '$lib/state/theme';
	import { afterNavigate } from '$app/navigation';
	import { selectedTags } from '$lib/projects/projects';

	let size = spring(7);
	let clicked: boolean = false;

	$: ($hoverOverLink, clicked, $hoverOverText, scrollY), updateSize();

	function updateSize() {
		if (clicked) {
			if ($hoverOverLink) {
				size.set(15);
				pointerClasses = 'dark:fill-white fill-black dark:opacity-50 opacity-20';
				return;
			}
			if ($hoverOverText) {
				size.set(7);
				pointerClasses = 'dark:fill-white fill-black dark:opacity-50 opacity-20';
				return;
			} else {
				size.set(15);
				return;
			}
		}
		if ($hoverOverLink) {
			size.set(25);
			pointerClasses = 'dark:fill-white fill-black dark:opacity-20 opacity-10';
			return;
		}
		if ($hoverOverText) {
			size.set(15);
			pointerClasses = 'dark:fill-white fill-black dark:opacity-20 opacity-10';
			return;
		} else {
			size.set(7);
			pointerClasses = 'fill-brand';
		}
	}
	let pointerClasses = 'fill-brand';
	let scrollY: number = -1;
	let pageX: number = -1;
	let pageY: number = 0;
	let ready = false;

	function getImagesToPreload() {
		if (browser) {
			if ($page.url.pathname === '/' || $page.url.pathname === '') {
				for (let skill of designSkills) {
					$preloadImageUrls = [...$preloadImageUrls, `icons/skills/${skill.icon}`];
				}
				for (let skill of otherSkills) {
					$preloadImageUrls = [...$preloadImageUrls, `icons/skills/${skill.icon}`];
				}
				for (let skill of frontendSkills) {
					$preloadImageUrls = [...$preloadImageUrls, `icons/skills/${skill.icon}`];
				}
			}
		}
		$preloadImageUrls = [...$preloadImageUrls, '/images/tirana.webp'];
	}

	function goTop() {
		document.body.scrollIntoView({ behavior: 'auto' });
	}
	onMount(() => {
		getImagesToPreload();
	});

	afterNavigate(() => {
		hoverOverLink.set(false);
		hoverOverText.set(false);
		updateSize();
		if ($page.url.pathname.includes('projects')) {
			goTop();
			ready = false;
			quickAnimation = true;
			setTimeout(() => (ready = true), 1000);
		}
		$selectedTags = [];
	});
	let quickAnimation = false;
</script>

<svelte:window
	on:mousemove={(e) => {
		pageX = e.clientX;
		pageY = e.clientY;
	}}
	bind:scrollY
/>

<svelte:head>
	{#each $preloadImageUrls as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

{#key ready}
	<div
		class={$theme}
		style="--textColor:{$theme === 'dark' ? 'black' : 'white'};--backgroundColor:{$theme === 'dark'
			? 'black'
			: 'white'}"
	>
		<div class="bg-white dark:bg-black">
			{#if !ready}
				<div
					class="fixed -z-10 flex h-screen w-screen flex-col items-center justify-center bg-white font-aeonik dark:bg-black dark:text-white"
					out:fade={{ duration: 500, easing: quadOut }}
				>
					<LoadingScreen
						{quickAnimation}
						on:isOver={() => {
							ready = true;
						}}
					/>
				</div>
			{/if}

			<div
				in:fade={{
					duration: 500,
					easing: quadIn,
				}}
				class="relative min-h-screen font-aeonik {pageX !== -1 && scrollY !== -1
					? 'lg:cursor-none'
					: ''} {$theme} {ready ? '' : 'hidden'}"
				on:mousedown={() => (clicked = true)}
				on:mouseup={() => (clicked = false)}
			>
				{#key $size}
					<svg class="pointer-events-none absolute z-[999] hidden h-full w-full lg:block">
						<circle class={pointerClasses} cx={pageX} cy={pageY + scrollY} r={$size} />
					</svg>
				{/key}
				<div
					class="bg-neutral-50 text-black transition-colors delay-150 ease-in-out dark:bg-black dark:text-white"
				>
					<Navbar />
					<slot />
				</div>
			</div>
		</div>
	</div>
{/key}
<div id={$theme === 'dark' ? 'scrollbarDark' : 'scrollbar'} class="z-50 hidden lg:block">
	<Svrollbar />
</div>

<style>
	#scrollbar {
		--svrollbar-thumb-background: #a3a3a3;
		--svrollbar-thumb-opacity: 100%;
	}

	#scrollbarDark {
		--svrollbar-thumb-background: #1f1f1f;
		--svrollbar-thumb-opacity: 100%;
	}

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