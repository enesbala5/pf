<script lang="ts">
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';

	import '../app.css';
	import { Svrollbar } from 'svrollbar';
	import Navbar from '$lib/components/Navbar.svelte';
	import { spring } from 'svelte/motion';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { fade } from 'svelte/transition';
	import { quadIn, quadOut } from 'svelte/easing';
	import {
		designSkills,
		frontendSkills,
		otherSkills,
	} from '$lib/info/skills';
	import { browser } from '$app/env';
	import { page } from '$app/stores';
	import { preloadImageUrls } from '$lib/state/preloadImageUrls';
	import { onMount } from 'svelte';
	import { theme } from '$lib/state/theme';

	let size = spring(7);
	let clicked: boolean = false;

	$: ($hoverOverLink, clicked, $hoverOverText, scrollY),
		updateSize();

	function updateSize() {
		if (clicked) {
			if ($hoverOverLink) {
				size.set(15);
				pointerClasses =
					'dark:fill-white fill-black dark:opacity-50 opacity-20';
				return;
			}
			if ($hoverOverText) {
				size.set(7);
				pointerClasses =
					'dark:fill-white fill-black dark:opacity-50 opacity-20';
				return;
			} else {
				size.set(15);
				return;
			}
		}
		if ($hoverOverLink) {
			size.set(25);
			pointerClasses =
				'dark:fill-white fill-black dark:opacity-20 opacity-10';
			return;
		}
		if ($hoverOverText) {
			size.set(15);
			pointerClasses =
				'dark:fill-white fill-black dark:opacity-20 opacity-10';
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
			if (
				$page.url.pathname === '/' ||
				$page.url.pathname === ''
			) {
				for (let skill of designSkills) {
					$preloadImageUrls = [
						...$preloadImageUrls,
						`icons/skills/${skill.icon}`,
					];
				}
				for (let skill of otherSkills) {
					$preloadImageUrls = [
						...$preloadImageUrls,
						`icons/skills/${skill.icon}`,
					];
				}
				for (let skill of frontendSkills) {
					$preloadImageUrls = [
						...$preloadImageUrls,
						`icons/skills/${skill.icon}`,
					];
				}
				$preloadImageUrls = [
					...$preloadImageUrls,
					'images/developer.jpg',
					'images/design.jpg',
				];
			}
		}
		$preloadImageUrls = [
			...$preloadImageUrls,
			'images/tirana.jpg',
		];
	}

	onMount(() => {
		if ($preloadImageUrls.length < 2) {
			getImagesToPreload();
		}
	});

	let finishedAnimation = false;
</script>

<div id="scrollbar">
	<Svrollbar />
</div>

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

<div class={$theme}>
	<div class="bg-white dark:bg-black">
		{#if !ready}
			<div
				class="fixed -z-10 flex h-screen w-screen flex-col items-center justify-center bg-white font-aeonik dark:bg-black dark:text-white"
			>
				<LoadingScreen
					on:isOver={() => {
						finishedAnimation = true;
						ready = true;
					}}
				/>
			</div>
		{/if}

		{#if ready}
			<div
				transition:fade={{ duration: 500, easing: quadIn }}
				class="relative min-h-screen font-aeonik lg:cursor-none {$theme}"
				on:mousedown={() => (clicked = true)}
				on:mouseup={() => (clicked = false)}
			>
				<svg
					class="pointer-events-none absolute z-[999] hidden h-full w-full lg:block"
				>
					<circle
						class={pointerClasses}
						cx={pageX}
						cy={pageY + scrollY}
						r={$size}
					/>
				</svg>
				<div
					class="bg-neutral-50 text-black transition-colors delay-150 ease-in-out dark:bg-black dark:text-white"
				>
					<Navbar />
					<slot />
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	#scrollbar {
		--svrollbar-thumb-background: #1f1f1f;
		--svrollbar-thumb-opacity: 100%;
	}

	#logo {
		-webkit-animation: spin 4s linear infinite;
		-moz-animation: spin 4s linear infinite;
		animation: spin 4s linear infinite;
	}
	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>
