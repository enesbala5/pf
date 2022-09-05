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
		? 'my-12 lg:my-44'
		: ''} mx-auto flex w-10/12 items-center pb-10"
>
	<div class="w-1/2">
		<h2 class="text-3xl font-medium">
			Interested in working together?
		</h2>
		<p class="mt-2">
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
		class="h-96 w-1/2 overflow-hidden bg-neutral-200 dark:bg-darkgray"
	>
		<div class="h-full w-full mix-blend-multiply">
			<img
				src="images/contact.png"
				alt=""
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</div>
