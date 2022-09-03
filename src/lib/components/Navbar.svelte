<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import { quadIn } from 'svelte/easing';
	import { quadOut } from 'svelte/easing';
	import { afterNavigate } from '$app/navigation';
	import { darkMode } from '$lib/info/darkMode';
	import DarkModeToggle from './DarkModeToggle.svelte';
	import { navigation } from '$lib/info/nav';
	import { hoverOverLink, hoverOverText } from '$lib/state/hoverOver';

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

	function clickLink() {
		open = false;
	}

	function toggleDarkMode() {
		darkMode.set(!$darkMode);
	}

	afterNavigate(() => {
		open = false;
	});
</script>

<!-- mobile -->
<nav
	class="bg-mainbg flex w-full items-center justify-between p-4 text-white lg:hidden"
>
	<a
		on:mouseenter={hoveredOverNavItem}
		on:mouseleave={notHovering}
		href={navigation.home}
		class="z-[999] h-4 font-medium"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-full fill-white"
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
	<div class="noSelect z-[999] flex h-10 space-x-3">
		<div on:click={manageMenu} class="z-30">
			<button
				class="z-60 relative w-6 text-white focus:outline-none"
			>
				<span class="sr-only">Open main menu</span>
				<div
					class="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform"
				>
					<span
						aria-hidden="true"
						class="{!open
							? '-translate-y-1.5'
							: 'rotate-45'} absolute block h-0.5 w-5 transform bg-white transition duration-500 ease-in-out"
					/>
					<span
						aria-hidden="true"
						class="absolute block h-0.5 w-5 transform bg-white transition duration-500 ease-in-out"
						class:opacity-0={open}
					/>
					<span
						aria-hidden="true"
						class="{!open
							? 'translate-y-1.5'
							: '-rotate-45'} absolute block h-0.5 w-5 transform bg-white transition  duration-500 ease-in-out"
					/>
				</div>
			</button>
		</div>
	</div>

	<!-- actual nav items -->

	{#if open}
		<div
			in:fade={{ duration: 300, easing: quadIn }}
			out:fade={{ duration: 300, easing: quadOut }}
			on:click={manageMenu}
			style="touch-action: none;"
			class="fixed top-0 bottom-0 right-0 left-0 z-[20] flex h-screen w-full flex-col overflow-x-hidden overflow-y-hidden bg-black p-4 text-black"
		>
			<a
				href={navigation.home}
				class=" mt-28 text-6xl font-medium md:text-7xl  lg:text-8xl  {$page
					.url.pathname === '/'
					? 'text-white'
					: 'outline'}"
			>
				Home
			</a>
			<a
				href={navigation.work}
				class=" text-6xl font-medium md:text-7xl lg:text-8xl {$page.url.pathname.includes(
					'work'
				)
					? 'text-white'
					: 'outline'} "
			>
				Work
			</a>
			<a
				href={navigation.about}
				class=" text-6xl font-medium md:text-7xl lg:text-8xl {$page.url.pathname.includes(
					'about'
				)
					? 'text-white'
					: 'outline'} "
			>
				About
			</a>
			<a
				href={navigation.contact}
				class=" text-6xl font-medium md:text-7xl lg:text-8xl {$page.url.pathname.includes(
					'contact'
				)
					? 'text-white'
					: 'outline'} "
			>
				Contact
			</a>
		</div>
	{/if}
</nav>

<!-- desktop -->
<nav
	class="mx-auto hidden  w-10/12 items-center justify-between py-6 font-aeonik dark:text-white text-black lg:flex"
>
	<a
		on:mouseenter={hoveredOverNavItem}
		on:mouseleave={notHovering}
		href={navigation.home}
		class="h-4 font-medium"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-full dark:fill-white fill-black"
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
			class="c text-sm opacity-50 transition-opacity delay-75  active:opacity-100 {$page.url.pathname.includes(
				'work'
			)
				? 'opacity-100'
				: 'hover:opacity-70'}">work</a
		>
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.about}
			class="c text-sm opacity-50 transition-opacity delay-75  active:opacity-100 {$page.url.pathname.includes(
				'about'
			)
				? 'opacity-100'
				: 'hover:opacity-70'}">about</a
		>
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.contact}
			class="c text-sm opacity-50 transition-opacity delay-75  active:opacity-100 {$page.url.pathname.includes(
				'contact'
			)
				? 'opacity-100'
				: 'hover:opacity-70'}">contact</a
		>
		<!-- <svg
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			on:click={toggleDarkMode}
			xmlns="http://www.w3.org/2000/svg"
			class="c h-5 w-5 opacity-50 transition-opacity delay-75  active:opacity-100"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
			/>
		</svg> -->
		<div
			on:mouseenter={hoveredOverText}
			on:mouseleave={notHovering}
			on:click={toggleDarkMode}
			class="h-5 w-5 opacity-50 transition-opacity delay-75 active:opacity-100"
		>
			<DarkModeToggle />
		</div>
	</div>
</nav>

<style>
	@supports (-webkit-text-stroke: 1px black) {
		.outline {
			-webkit-text-stroke: 0.5px white;
			-webkit-text-fill-color: black;
		}
	}
</style>
