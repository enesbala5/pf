<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Select from "svelte-select";
	import { hoverOverLink, hoverOverText } from "$lib/state/hoverOver";

	let items = [
		{ value: "designUIUX", label: "Design - UI / UX" },
		{ value: "designOther", label: "Design - other" },
		{ value: "website", label: "Website" },
	];
	let interest = "";

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

<title>Contact - Name Surn</title>

<!-- contact --> 
<div class="mx-auto lg:mt-24 mt-12 lg:w-10/12 w-full p-4 font-aeonik text-white">
	<h1 class="headline">Contact</h1>
	<div class="relative mx-auto mt-24 mb-8 lg:grid lg:grid-cols-10 lg:gap-2 text-lg">
		<div class="col-span-8 col-start-2 flex items-center justify-between">
			<p class="text-justify">
				Love to hear from you,<br />
				Get in touch!
			</p>
			<div
				class="h-4 w-4 rotate-45 bg-white opacity-70"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}
			/>
		</div>

		<!-- form - fix emailAddress -->
		<form
			action="https://formsubmit.co/emailAddress@emailAddress"
			class="col-span-8 col-start-2 mt-8 space-y-4 bg-darkgray lg:p-6 p-4 text-base"
		>
			<!-- row -->
			<div class="flex sm:flex-row flex-col items-center sm:space-x-6 space-y-3 lg:space-y-0">
				<div class="flex sm:w-1/2 w-full flex-col space-y-3">
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
				<div class="flex sm:w-1/2 w-full flex-col space-y-3">
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
				<div class="selectStyling flex w-full flex-col">
					<p class="mb-3">What are you interested in</p>
					<div
						class="w-full"
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
					class="buttonSecondary  mt-6 lg:w-1/2 w-full"
					on:mouseenter={hoveredOverLink}
					on:mouseleave={notHovering}>Just Send</button
				>
				<div class="invisible mt-6 hidden lg:block w-1/2" />
			</div>
		</form>
		<!-- end form -->
		<!-- map -->
		<div class="col-span-8 col-start-2 mt-8 space-y-4 text-base">
			<p class="opacity-70">Where I'm Located</p>
			<div
				class="flex h-56 w-full items-center justify-center overflow-hidden bg-darkgray "
			>
				<img src="images/map.png" alt="" class="w-full mix-blend-difference " />
			</div>
		</div>
		<!-- end map -->
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-96 font-aeonik  text-white">
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
		--placeholderColor: #5d6167;
		--inputColor: #fff;
		--inputPadding: 0.75rem 1.25rem;
		--height: 3rem;
		--clearSelectColor: #5d6167;
		--clearSelectFocusColor: #5d6167;
	}
</style>
