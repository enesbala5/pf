<script>
	import ContactCta from '$lib/components/ContactCTA.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LogoSlider from '$lib/components/LogoSlider.svelte';
	import ImageCard from '$lib/components/project/ImageCard.svelte';
	import { cityName } from '$lib/info/info';
</script>

<title>About Me - Enes Bala</title>

<!-- about me -->
<div
	class="mx-auto mt-24 w-full px-4 font-aeonik lg:w-10/12 lg:px-0"
>
	<h1 class="headline">About me</h1>
	<div
		class="relative mx-auto mb-8 mt-24 grid grid-cols-1 text-lg md:grid-cols-10 md:gap-2"
	>
		<div class="md:col-span-3 md:col-start-2">
			<p class="">
				Enes Bala is a designer & developer based in {cityName},
				Albania.
			</p>
			<div
				class="mt-8 w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-darkgray"
			>
				<div
					class="h-full w-full mix-blend-multiply dark:opacity-40 dark:mix-blend-lighten dark:invert"
				>
					<img
						src="images/tirana.jpg"
						alt={cityName}
						class="w-full"
					/>
				</div>
			</div>
		</div>
		<!-- main info -->
		<div
			class="col-span-4 col-start-1 mt-8 md:col-span-3 md:col-start-6 lg:mt-0"
		>
			<p class="">
				He specializes in helping brands build an identity
				and being recognizable, through disciplines,
				including:
			</p>
			<ul
				class="mt-12 flex flex-col justify-between space-y-4 text-base lg:space-y-2 "
			>
				<li>
					<div
						class="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between "
					>
						Development <span
							class="whitespace-nowrap opacity-50"
						>
							Websites and other mediums</span
						>
					</div>
				</li>
				<li>
					<div
						class="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between "
					>
						Graphic Design <span
							class="whitespace-nowrap opacity-50"
							>Branding, Identity & Promo</span
						>
					</div>
				</li>
				<li>
					<div
						class="flex w-full flex-col lg:flex-row lg:items-center lg:justify-between "
					>
						Other <span
							class="whitespace-nowrap opacity-50"
						>
							Social Media & 3D Work</span
						>
					</div>
				</li>
			</ul>
		</div>
		<!-- end main info -->
	</div>
	<!-- info + image with gray sidebar -->
	<div
		class="relative mx-auto mt-12 mb-12 grid w-full grid-cols-4 gap-0 gap-y-8 py-12 text-lg lg:mt-24 lg:grid-cols-10 lg:gap-2 lg:gap-y-12 lg:px-0"
	>
		<!-- sidebar -->
		<div
			class="absolute right-0 hidden h-full w-2 bg-neutral-100 dark:bg-darkgray lg:block"
		/>
		<!-- sidebar end -->

		<!-- design experience -->
		<div
			class="col-span-1 row-start-2 flex h-32 items-center justify-center overflow-hidden rounded-md bg-neutral-200 lg:bg-neutral-100 dark:bg-darkgray lg:col-span-2 lg:h-44 lg:py-0"
		>
			<p class="text-5xl font-medium lg:text-7xl">6</p>
		</div>
		<div
			class="col-span-3 row-start-2 flex h-32 flex-col justify-center rounded-md bg-neutral-100 pl-4 dark:bg-darkgray dark:bg-opacity-50 lg:col-span-6 lg:h-44 lg:bg-transparent lg:py-0 lg:pl-8 dark:lg:bg-transparent dark:lg:bg-opacity-100"
		>
			<p class="text-lg font-medium lg:text-2xl">
				Years of Experience
			</p>
			<p class="mt-2 text-sm opacity-70 lg:text-base">
				Design, Branding and Identity & Promotional Work
			</p>
		</div>
		<!-- programming experience -->
		<div
			class="col-span-3 row-start-3  flex h-32 flex-col items-end justify-center rounded-md bg-neutral-100 pr-4 text-right dark:bg-darkgray dark:bg-opacity-50 lg:col-span-6 lg:h-44 lg:bg-transparent lg:py-0 lg:pr-8 dark:lg:bg-transparent dark:lg:bg-opacity-100"
		>
			<p class="text-lg font-medium lg:text-2xl">
				Years of Experience
			</p>
			<p class="mt-2 text-sm opacity-70 lg:text-base">
				Website Development and General Purpose Programming
			</p>
		</div>
		<div
			class="col-span-1 row-start-3 flex h-32 items-center justify-center overflow-hidden rounded-md bg-neutral-200 lg:bg-neutral-100 dark:bg-darkgray lg:col-span-2 lg:h-44 lg:py-0"
		>
			<p class="text-5xl font-medium lg:text-7xl">4</p>
		</div>
		<!-- image -->
		<div
			class="col-span-4 row-start-4 mt-16 overflow-hidden rounded-md bg-neutral-200 dark:bg-darkgray lg:col-span-8 lg:mt-32 lg:h-[65vh]"
		>
			<ImageCard image="images/me.jpg" alternativeImage />
			<!-- <img
				src="images/me.jpg"
				alt=""
				class="opacity-70 mix-blend-luminosity transition-all hover:opacity-100 dark:opacity-50 dark:hover:opacity-70"
			/> -->
		</div>
	</div>
	<!-- end info + image with sidebar -->
</div>
<!-- end about me -->
<!-- contact + footer -->
<div class="mx-auto space-y-16 font-aeonik lg:mt-24">
	<LogoSlider />
	<!-- <ContactCta /> -->
	<Footer />
</div>
<!-- end contact + footer -->
