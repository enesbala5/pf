<script>
	import { navigation } from '$lib/info/nav';

	import {
		hoverOverLink,
		hoverOverText,
	} from '$lib/state/hoverOver';
	import LineUnderText from './LineUnderText.svelte';
	import ProjectContainer from './project/containers/ProjectContainer.svelte';
	import FooterLogo from './project/footer/footerLogo.svelte';
	import ParallaxContainer from './project/ParallaxContainer.svelte';

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

<!-- lg: only -->
<ParallaxContainer topMargin={false}>
	<ProjectContainer
		widthNotDefined
		customMargin="bg-neutral-100 text-black dark:bg-darkgray h-full"
	>
		<footer
			class="mx-auto h-full w-full px-4 lg:w-10/12 lg:py-24 lg:px-0"
		>
			<div class="lg:w-2/3">
				<h2 class="projectH1">
					Have an idea?
				</h2>
				<p class="projectH1 font-light">Get in touch</p>
			</div>

			<div class="my-8">
				<LineUnderText
					link
					text="contact@enesbala.com"
					linkUrl={'mailto:contact@enesbala.com'}
				/>
			</div>

			<div
				class="mx-auto flex flex-row items-center justify-between  lg:flex-row"
			>
				<FooterLogo />
				<div
					class="space-x-4 text-sm opacity-70 lg:space-x-20"
				>
					<a
						class="font-normal"
						href={navigation.work}
						on:mouseenter={hoveredOverLink}
						on:mouseleave={notHovering}>work</a
					>
					<a
						class="font-normal"
						href={navigation.about}
						on:mouseenter={hoveredOverLink}
						on:mouseleave={notHovering}>about</a
					>
					<a
						class="font-normal"
						href={navigation.contact}
						on:mouseenter={hoveredOverLink}
						on:mouseleave={notHovering}>contact</a
					>
				</div>
			</div>
			<hr
				class="my-6 mx-4 border-white opacity-20 dark:opacity-70 lg:mx-0"
			/>
			<div
				class="mx-4 flex flex-col justify-between font-mono text-xs opacity-50 lg:flex-row"
			>
				<p
					class="hidden lg:block"
					on:mouseenter={hoveredOverText}
					on:mouseleave={notHovering}
				>
					Personal Portfolio ™
				</p>
				<p
					on:mouseenter={hoveredOverText}
					on:mouseleave={notHovering}
				>
					Designed and Developed in 2022
				</p>
			</div>
		</footer>
	</ProjectContainer>
</ParallaxContainer>

<style>
	::-moz-selection {
		color: black;
		background: white;
	}

	::selection {
		color: black;
		background: white;
	}
</style>
