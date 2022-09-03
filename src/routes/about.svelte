<script>
	import ContactCta from '$lib/components/ContactCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { cityName } from '$lib/info/info';
</script>

<title>About Me - Enes Bala</title>

<!-- about me -->
<div
	class="mx-auto mt-24 w-full p-4 font-aeonik lg:w-10/12"
>
	<h1 class="headline">About me</h1>
	<div
		class="relative mx-auto mt-12 mb-8 grid grid-cols-10 gap-2 text-lg lg:mt-24"
	>
		<div class="col-span-3 col-start-2">
			<p class="text-justify">
				Enes Bala is a designer & developer based in Tirana,
				Albania.
			</p>
			<div
				class="mt-8 w-full overflow-hidden bg-neutral-200 dark:bg-darkgray"
			>
				<div class="h-full w-full mix-blend-multiply">
					<img
						src="images/tirana.jpg"
						alt={cityName}
						class="w-full"
					/>
				</div>
			</div>
		</div>
		<!-- main info -->
		<div class="col-span-3 col-start-6">
			<p class="text-justify">
				He specializes in helping brands build an identity
				and being recognizable, through multiple
				disciplines, including:
			</p>
			<ul
				class="mt-8 flex flex-col justify-between space-y-2 text-base opacity-70"
			>
				<li>
					<div
						class="flex w-full items-center justify-between"
					>
						Development <span
							class="whitespace-nowrap opacity-50"
						>
							Frontend, DB & Auth</span
						>
					</div>
				</li>
				<li>
					<div
						class="flex w-full items-center justify-between"
					>
						Graphic Design <span
							class="whitespace-nowrap opacity-50"
							>Branding, Identity & Web</span
						>
					</div>
				</li>
				<li>
					<div
						class="flex w-full items-center justify-between"
					>
						Other <span
							class="whitespace-nowrap opacity-50"
						>
							Social Media & 3D Design</span
						>
					</div>
				</li>
			</ul>
		</div>
		<!-- end main info -->
	</div>
	<!-- info + image with gray sidebar -->
	<div
		class="relative mx-auto mt-24 mb-12 grid w-full grid-cols-10 gap-2 gap-y-12 py-12 text-lg"
	>
		<!-- sidebar -->
		<div
			class="absolute right-0 h-full w-2 bg-neutral-200 dark:bg-darkgray"
		/>
		<!-- sidebar end -->

		<!-- design experience -->
		<div
			class="col-span-2 row-start-2 flex h-44 items-center justify-center bg-neutral-200 dark:bg-darkgray"
		>
			<p class="text-7xl font-medium">6</p>
		</div>
		<div
			class="col-span-6 row-start-2 flex h-44 flex-col justify-center pl-8"
		>
			<p class="text-2xl font-medium">
				Years of Experience
			</p>
			<p class="mt-2 text-base opacity-70">
				Design, Branding and Identity
			</p>
		</div>
		<!-- programming experience -->
		<div
			class="col-span-6 row-start-3 flex h-44 flex-col items-end justify-center pr-8"
		>
			<p class="text-2xl font-medium">
				Years of Experience
			</p>
			<p class="mt-2 text-base opacity-70">
				Website Development and General Purpose Programming
			</p>
		</div>
		<div
			class="col-span-2 row-start-3 flex h-44 items-center justify-center bg-neutral-200 dark:bg-darkgray"
		>
			<p class="text-7xl font-medium">4</p>
		</div>
		<!-- image -->
		<div
			class="col-span-8 row-start-4 mt-32 flex h-[65vh] items-center justify-center overflow-hidden bg-neutral-200 dark:bg-darkgray"
		>
			<img
				src="images/me.jpg"
				alt=""
				class="opacity-70 mix-blend-luminosity transition-all delay-75 hover:opacity-100 dark:opacity-50 dark:hover:opacity-70"
			/>
		</div>
	</div>
	<!-- end info + image with sidebar -->
</div>
<!-- end about me -->
<!-- contact + footer -->
<div class="mx-auto font-aeonik ">
	<ContactCta />
	<Footer />
</div>
<!-- end contact + footer -->
