<script>
	import { navigation } from "$lib/info/nav";
	import { hoverOverLink } from "$lib/state/hoverOver";

	function hoveredOverNavItem() {
		hoverOverLink.set(true);
	}

	function notHovering() {
		hoverOverLink.set(false);
	}
</script>

<nav
	class="mx-auto flex w-10/12  items-center justify-between py-6 font-aeonik text-white"
>
	<a
		on:mouseenter={hoveredOverNavItem}
		on:mouseleave={notHovering}
		href={navigation.home}
		class="font-medium cursor-none">Name Surn</a
	>

	<div class="flex items-center space-x-20">
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.work}
			class="cursor-none text-sm opacity-50 transition-all delay-75 hover:opacity-70 active:opacity-100"
			>work</a
		>
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.about}
			class="cursor-none text-sm opacity-50 transition-all delay-75 hover:opacity-70 active:opacity-100"
			>about</a
		>
		<a
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			href={navigation.contact}
			class="cursor-none text-sm opacity-50 transition-all delay-75 hover:opacity-70 active:opacity-100"
			>contact</a
		>
		<svg
			on:mouseenter={hoveredOverNavItem}
			on:mouseleave={notHovering}
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 cursor-none opacity-50 transition-all delay-75 hover:opacity-70 active:opacity-100"
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
		</svg>
	</div>
</nav>
