<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import {
		expoInOut,
		quadIn,
		quadInOut,
		sineOut,
	} from 'svelte/easing';
	import { quadOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	import { darkMode } from '$lib/info/darkMode';
	import DarkModeToggle from './DarkModeToggle.svelte';
	import type { Theme } from 'src/types';
	import { navigation } from '$lib/info/nav';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { setTheme, theme } from '$lib/state/theme';
	import LineUnderText from './LineUnderText.svelte';
	import { emailAddress } from '$lib/info/info';

	function hoveredOverNavItem() {
		hoverOverLink.set(true);
	}

	function hoveredOverText() {
		hoverOverText.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
		hoverOverText.set(false);
	}

	let open = false;
	let scrollable = true;

	const manageMenu = () => {
		open = !open;
		scrollable = !scrollable;
	};
	const wheel = (node: any, options: any) => {
		let { scrollable } = options;

		const handler = (e: any) => {
			if (!scrollable) e.preventDefault();
		};

		node.addEventListener('wheel', handler, {
			passive: false,
		});

		return {
			update(options: any) {
				scrollable = options.scrollable;
			},
			destroy() {
				node.removeEventListener('wheel', handler, {
					passive: false,
				});
			},
		};
	};

	afterNavigate(() => {
		setTimeout(() => {
			open = false;
		}, 100);
	});

	$: nextTheme = (
		$theme === 'dark' ? 'light' : 'dark'
	) as Theme;
	const handleThemeIconClick = () => {
		setTheme(nextTheme);
	};
</script>

<!-- mobile -->
<nav
	class="bg-mainbg flex w-full items-center justify-between p-4 transition-colors ease-in-out lg:hidden"
>
	<a
		on:mouseenter={hoveredOverNavItem}
		on:mouseleave={notHovering}
		href={navigation.home}
		class="z-[999] h-4 font-medium"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-full fill-black transition-colors delay-150 ease-in-out dark:fill-white"
			viewBox="0 0 396.79 238.118"
		>
			<g
				id="Layer_1-2-2"
				data-name="Layer 1-2-2"
				transform="translate(-282.241 -2074.823)"
			>
				<g
					id="Layer_1-2-2-2"
					data-name="Layer 1-2-2-2"
					transform="translate(282.241 2074.823)"
				>
					<path
						id="Path_29"
						data-name="Path 29"
						d="M282.241,2190.886l196.589,122.057,200.2-116.135L482.442,2074.824l-38.495,21.738,150.8,93.6-42.033,21.666-102.484-64.423-37.556,18.562L524.331,2236.1,471.1,2263.036l-150.439-93.311Z"
						transform="translate(-282.241 -2074.824)"
					/>
				</g>
			</g>
		</svg>
	</a>
	<div class="noSelect z-[999] flex space-x-3">
		<div
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
			on:click={handleThemeIconClick}
			label="toggle theme from {$theme} to {nextTheme}"
			aria-live="polite"
			class="h-5 w-5  active:opacity-100"
		>
			<DarkModeToggle />
		</div>
		<div
			on:click={manageMenu}
			class="z-30 flex h-5 items-center justify-center"
		>
			<button
				class="z-60 relative h-full w-5 focus:outline-none"
			>
				<div
					class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"
				>
					<span
						aria-hidden="true"
						class="{!open
							? '-translate-y-1.5'
							: 'rotate-45'} absolute block h-0.5 w-5 transform bg-black transition duration-500 ease-in-out dark:bg-white"
					/>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-5 transform bg-black transition duration-500 ease-in-out dark:bg-white"
						class:opacity-0={open}
					/>
					<span
						aria-hidden="true"
						class="{!open
							? 'translate-y-1.5'
							: '-rotate-45'} absolute block h-0.5 w-5 transform bg-black transition duration-500  ease-in-out dark:bg-white"
					/>
				</div>
			</button>
		</div>
	</div>

	<!-- actual nav items -->

	{#if open}
		<div
			in:fade={{ duration: 100, easing: quadInOut }}
			out:fade={{ duration: 100, easing: quadInOut }}
			style="touch-action: none;"
			class="fixed top-0 bottom-0 right-0 left-0 z-[20] flex h-screen w-full items-center 
			overflow-x-hidden overflow-y-hidden bg-neutral-50 p-4 text-neutral-50 dark:bg-black dark:text-black"
		>
			<div
				class="flex h-full flex-col justify-center pb-[25%]"
			>
				<div class="flex flex-col space-y-2">
					<p
						class="text-mono pb-4 text-black opacity-50 dark:text-white"
					>
						Menu
					</p>
					<a
						href={navigation.home}
						class="text-6xl font-medium md:text-7xl  lg:text-8xl  {$page
							.url.pathname === '/'
							? 'text-black dark:text-white'
							: $theme === 'dark'
							? 'outlineDark'
							: 'outline'}"
					>
						Home
					</a>
					<a
						href={navigation.work}
						class=" text-6xl font-medium md:text-7xl lg:text-8xl
						{$page.url.pathname.includes('work') ||
						$page.url.pathname.includes('projects')
							? 'text-black dark:text-white'
							: $theme === 'dark'
							? 'outlineDark'
							: 'outline'} "
					>
						Work
					</a>
					<a
						href={navigation.about}
						class=" text-6xl font-medium md:text-7xl lg:text-8xl {$page.url.pathname.includes(
							'about'
						)
							? 'text-black dark:text-white'
							: $theme === 'dark'
							? 'outlineDark'
							: 'outline'} "
					>
						About
					</a>
					<a
						href={navigation.contact}
						class=" text-6xl font-medium md:text-7xl lg:text-8xl {$page.url.pathname.includes(
							'contact'
						)
							? 'text-black dark:text-white'
							: $theme === 'dark'
							? 'outlineDark'
							: 'outline'} "
					>
						Contact
					</a>
					<p
						class="text-mono pt-16 text-black opacity-50 dark:text-white"
					>
						Get in touch
					</p>
					<LineUnderText
						central
						link
						linkUrl={`mailto:${emailAddress}`}
						text={emailAddress}
						textColor="inverted"
						lineColor="default"
						centralOpacity="opacity-10 dark:opacity-[15%]"
					/>
				</div>
			</div>
		</div>
	{/if}
</nav>

<!-- desktop -->
<nav
	class="mx-auto hidden w-10/12 items-center justify-between py-6 font-aeonik text-black transition-colors delay-150 ease-in-out dark:text-white lg:flex"
>
	<a
		on:mouseenter={hoveredOverNavItem}
		on:mouseleave={notHovering}
		href={navigation.home}
		class="h-4 font-medium"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-full fill-black transition-colors delay-150 ease-in-out dark:fill-white"
			viewBox="0 0 396.79 238.118"
		>
			<g
				id="Layer_1-2-2"
				data-name="Layer 1-2-2"
				transform="translate(-282.241 -2074.823)"
			>
				<g
					id="Layer_1-2-2-2"
					data-name="Layer 1-2-2-2"
					transform="translate(282.241 2074.823)"
				>
					<path
						id="Path_29"
						data-name="Path 29"
						d="M282.241,2190.886l196.589,122.057,200.2-116.135L482.442,2074.824l-38.495,21.738,150.8,93.6-42.033,21.666-102.484-64.423-37.556,18.562L524.331,2236.1,471.1,2263.036l-150.439-93.311Z"
						transform="translate(-282.241 -2074.824)"
					/>
				</g>
			</g>
		</svg>
	</a>

	<div class="flex items-center space-x-20">
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.work}
			class="c text-sm opacity-50 active:opacity-100 {$page.url.pathname.includes(
				'work'
			)
				? 'opacity-100'
				: 'hover:opacity-70'}">work</a
		>
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.about}
			class="c text-sm opacity-50  active:opacity-100 {$page.url.pathname.includes(
				'about'
			)
				? 'opacity-100'
				: 'hover:opacity-70'}">about</a
		>
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.contact}
			class="c text-sm opacity-50  active:opacity-100 {$page.url.pathname.includes(
				'contact'
			)
				? 'opacity-100'
				: 'hover:opacity-70'}">contact</a
		>
		<div
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
			on:click={handleThemeIconClick}
			label="toggle theme from {$theme} to {nextTheme}"
			aria-live="polite"
			class="h-5 w-5 opacity-50 active:opacity-100"
		>
			<DarkModeToggle />
		</div>
	</div>
</nav>

<style>
	@supports (-webkit-text-stroke: 1px white) {
		.outlineDark {
			-webkit-text-stroke: 0.5px white;
			-webkit-text-fill-color: black;
		}
	}
	@supports (-webkit-text-stroke: 1px black) {
		.outline {
			-webkit-text-stroke: 1px black;
			-webkit-text-fill-color: #f8fafc;
		}
	}
</style>
