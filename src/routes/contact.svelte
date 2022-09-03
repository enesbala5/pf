<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Select from 'svelte-select';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import { darkMode } from '$lib/info/darkMode';

	let items = [
		{ value: 'designUIUX', label: 'Design - UI / UX' },
		{ value: 'designOther', label: 'Design - other' },
		{ value: 'website', label: 'Website' },
	];
	let interest = '';

	function handleSelect(event: any) {
		interest = event.detail;
		console.log(interest.value);
	}

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
</script>

<title>Contact - Enes Bala</title>

<!-- contact -->
<div
	class="mx-auto mt-12 w-full p-4 font-aeonik lg:mt-24 lg:w-10/12"
>
	<h1 class="headline">Contact</h1>
	<div
		class="relative mx-auto mt-24 mb-8 text-lg lg:grid lg:grid-cols-10 lg:gap-2"
	>
		<div
			class="col-span-8 col-start-2 flex items-center justify-between"
		>
			<p class="text-justify">
				Love to hear from you,<br />
				Get in touch!
			</p>
			<div
				class="h-6"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-full dark:fill-white fill-black"
					viewBox="0 0 1133 680"
				>
					<g
						id="Layer_2"
						data-name="Layer 2"
						transform="translate(0.421 0.453)"
					>
						<g id="Layer_1" data-name="Layer 1">
							<g id="Layer_2-2" data-name="Layer 2">
								<g id="Layer_1-2" data-name="Layer 1-2">
									<g
										id="Layer_1-2-2"
										data-name="Layer 1-2-2"
									>
										<path
											id="Path_1"
											data-name="Path 1"
											d="M-.421,332.547l562,347,571-332-561-348-111,62,433,268-121,62-294-183-105,52,317,200-152,78-428-268Z"
										/>
									</g>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</div>
		</div>

		<!-- form - fix emailAddress -->
		<form
			action="https://formsubmit.co/emailAddress@emailAddress"
			class="col-span-8 col-start-2 mt-8 space-y-4 bg-neutral-200 p-4 text-base dark:bg-darkgray lg:p-6 "
		>
			<!-- row -->
			<div
				class="flex flex-col items-center space-y-3 sm:flex-row sm:space-x-6 lg:space-y-0"
			>
				<div
					class="flex w-full flex-col space-y-3 sm:w-1/2"
				>
					<p>Your Name</p>
					<input
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
						type="text"
						class="inputPrimary"
						placeholder="Name Surname"
						required
					/>
				</div>
				<div
					class="flex w-full flex-col space-y-3 sm:w-1/2"
				>
					<p>Your Address</p>
					<input
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
						type="text"
						class="inputPrimary"
						placeholder="name@email.com"
						required
					/>
				</div>
			</div>
			<!-- row -->
			<div class="flex items-center space-x-6">
				<div
					class="{$darkMode
						? 'selectStyling'
						: 'selectStylingDark'} flex w-full flex-col"
				>
					<p class="mb-3">What are you interested in</p>
					<div
						class="w-full font-aeonik"
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
					>
						<Select {items} on:select={handleSelect} />
					</div>
				</div>
			</div>
			<!-- row -->
			<div class="flex items-center space-x-6">
				<div class="flex w-full flex-col space-y-3">
					<p>Message</p>
					<textarea
						required
						on:mouseenter={hoveredOverText}
						on:mouseleave={notHovering}
						name="message"
						placeholder="Let me know what your project is about"
						class="inputPrimary"
						id="message"
						cols="30"
						rows="5"
					/>
				</div>
			</div>
			<!-- end row -->
			<div class="flex w-full space-x-6 ">
				<button
					class="buttonSecondary  mt-6 w-full lg:w-1/2"
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}>Just Send</button
				>
				<div class="invisible mt-6 hidden w-1/2 lg:block" />
			</div>
		</form>
		<!-- end form -->
		<!-- map -->
		<div
			class="col-span-8 col-start-2 mt-8 space-y-4 text-base"
		>
			<p class="opacity-70">Where I'm Located</p>
			<div
				class="flex h-56 w-full items-center justify-center overflow-hidden bg-darkgray "
			>
				<img
					src="images/map.png"
					alt=""
					class="w-full mix-blend-difference "
				/>
			</div>
		</div>
		<!-- end map -->
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-96 font-aeonik">
	<Footer />
</div>

<!-- end footer -->
<style>
	.selectStyling {
		--background: #1f1f1f;
		--border: none;
		--inputFontSize: 1rem;
		--borderRadius: none;
		--listBorderRadius: none;
		--listBackground: #1f1f1f;
		--itemHoverBG: #141414;
		--placeholderColor: #fff;
		--placeholderOpacity: 30%;
		--inputColor: #fff;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
		--itemIsActiveBG: #ef4444

	}
	.selectStylingDark {
		--background: #d4d4d4;
		--border: none;
		--inputFontSize: 1rem;
		--borderRadius: none;
		--listBorderRadius: none;
		--listBackground: #e5e5e5;
		--itemHoverBG: #f5f5f5;
		--placeholderColor: #475569;
		--placeholderOpacity: 100%;
		--inputColor: #fff;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
		--itemIsActiveBG: #ef4444
	}
</style>
