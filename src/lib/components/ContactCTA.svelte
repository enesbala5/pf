<script lang="ts">
	import { emailAddress } from '$lib/info/info';
	import { navigation } from '$lib/info/nav';
	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';

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

	export let margin: boolean = true;
</script>

<div
	class="{margin
		? 'mt-24 mb-20 lg:my-64'
		: ''} mx-auto flex lg:w-10/12 w-full px-4 lg:px-0 items-center pb-10 lg:flex-row flex-col-reverse"
>
	<div class="lg:w-1/2 w-full mt-8 lg:mt-0">
		<h2 class="lg:text-3xl text-2xl font-medium ">
			Interested in working together?
		</h2>
		<p class="lg:mt-2 mt-4">
			Get in touch and let's make something great
		</p>

		<div class="mt-14 flex items-center space-x-6">
			<a
				href={navigation.contact}
				class="buttonPrimary"
				on:mouseenter={hoveredOverLink}
				on:mouseleave={notHovering}>Get in touch</a
			>
			<a
				href={`mailto:${emailAddress}`}
				class="opacity-70"
				on:mouseenter={hoveredOverText}
				on:mouseleave={notHovering}>Send me an email</a
			>
		</div>
	</div>
	<div
		class="h-96 lg:w-1/2 overflow-hidden bg-neutral-200 dark:bg-darkgray max-h-48 lg:max-h-80 w-full"
	>
		<div class="h-full w-full dark:invert dark:mix-blend-lighten dark:opacity-40 mix-blend-multiply">
			<img
				src="images/contact.png"
				alt=""
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</div>
