<script>
	import { navigation } from "$lib/info/nav";

	import { hoverOverLink, hoverOverText } from "$lib/state/hoverOver";

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

<footer class="bg-darkgray py-8">
	<div class="mx-auto flex w-10/12 justify-between">
		<a
			href={navigation.home}
			class="font-medium"
			on:mouseenter={hoveredOverLink}
			on:mouseleave={notHovering}>Name Surn</a
		>
		<div class="space-x-20 text-sm opacity-70">
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
	<hr class="my-6 mx-auto w-10/12 opacity-70" />
	<div class="mx-auto flex w-10/12 justify-between text-xs opacity-70">
		<p on:mouseenter={hoveredOverText} on:mouseleave={notHovering}>2022™</p>
		<p on:mouseenter={hoveredOverText} on:mouseleave={notHovering}>
			Designed and Developed by Name Surn
		</p>
	</div>
</footer>
