<script lang="ts">
	import "../app.css";
	import { Svrollbar } from "svrollbar";
	import Navbar from "$lib/components/Navbar.svelte";
	import { spring } from "svelte/motion";
	import { hoverOverLink, hoverOverText } from "$lib/state/hoverOver";
	import { fade } from "svelte/transition";
	import { quadIn } from "svelte/easing";

	let size = spring(7);
	let clicked: boolean = false;

	$: ($hoverOverLink, clicked, $hoverOverText, scrollY), updateSize();

	function updateSize() {
		if (clicked) {
			if ($hoverOverLink) {
				size.set(15);
				pointerClasses = "fill-white opacity-50";
				return;
			}
			if ($hoverOverText) {
				size.set(7);
				pointerClasses = "fill-white opacity-50";
				return;
			} else {
				size.set(15);
				return;
			}
		}
		if ($hoverOverLink) {
			size.set(25);
			pointerClasses = "fill-white opacity-20";
			return;
		}
		if ($hoverOverText) {
			size.set(15);
			pointerClasses = "fill-white opacity-20";
			return;
		} else {
			size.set(7);
			pointerClasses = "fill-red-500";
		}
	}

	let pointerClasses = "fill-red-500";

	let scrollY: number = -1;
	let pageX: number = -1;
	let pageY: number = 0;

	let ready = false;

	$: if (pageX !== -1 && pageY !== -1) {
		ready = true;
	}

	// ? open page automatically if no mouse movement .. fallback option
	setTimeout(() => {
		if (!ready && pageX === -1) {
			ready = true;
			pageX = 400;
			pageY = 400;
			return;
		}
	}, 500);
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

{#if !ready}
	<div
		class="fixed -z-10 flex h-screen w-screen flex-col items-center justify-center bg-black font-aeonik text-white"
	>
		<div id="logo" class="mt-16 h-6 w-6  bg-white" />
		<p class="mt-16 font-mono text-xs opacity-70">Loading</p>
		<p class="mt-0 font-mono text-xs opacity-50">Tip: Hover or click to enter</p>
	</div>
{/if}

{#if ready}
	<div
		in:fade={{ duration: 500, easing: quadIn }}
		class="relative min-h-screen lg:cursor-none font-aeonik text-white"
		on:mousedown={() => (clicked = true)}
		on:mouseup={() => (clicked = false)}
	>
		<svg class="pointer-events-none absolute z-[999] h-full w-full hidden lg:block">
			<circle
				class={pointerClasses}
				cx={pageX}
				cy={pageY + scrollY}
				r={$size}
			/>
		</svg>
		<Navbar />
		<slot />
	</div>
{/if}

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
