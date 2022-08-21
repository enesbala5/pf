<script>
	import ContactCta from "$lib/components/ContactCTA.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import { cityName } from "$lib/info/info";
</script>

<!-- about me -->
<div class="mx-auto mt-24 w-10/12 font-aeonik text-white">
	<h1 class="text-8xl font-medium">About me</h1>
	<div class="relative mx-auto mt-24 mb-8 grid grid-cols-10 gap-2 text-lg">
		<div class="col-span-3 col-start-2">
			<p class="text-justify">
				Name surn is a designer / developer based in City, Country.
			</p>
			<div class="mt-8 w-full overflow-hidden bg-darkgray">
				<div class="h-full w-full mix-blend-multiply">
					<img src="images/contact.png" alt={cityName} class="w-full" />
				</div>
			</div>
		</div>
		<!-- main info -->
		<div class="col-span-3 col-start-6">
			<p class="text-justify">
				He specializes in helping brands build an identity and being
				recognizable, through multiple disciplines, including:
			</p>
			<ul
				class="mt-8 flex  flex-col justify-between space-y-2 text-base opacity-70"
			>
				<li>Design, Branding& Identity</li>
				<li>Website Design& Development</li>
				<li>3D Design& Social Media Management</li>
			</ul>
		</div>
		<!-- end main info -->
	</div>
	<!-- info + image with gray sidebar -->
	<div
		class="relative mx-auto mt-24 mb-12 grid w-full grid-cols-10 gap-2 gap-y-12 py-12 text-lg"
	>
		<!-- sidebar -->
		<div class="absolute right-0 h-full w-2 bg-darkgray" />
		<!-- sidebar end -->

		<!-- design experience -->
		<div
			class="col-span-2 row-start-2 flex h-44 items-center justify-center bg-darkgray"
		>
			<p class="text-7xl font-medium">6</p>
		</div>
		<div class="col-span-6 row-start-2 flex h-44 flex-col justify-center pl-8">
			<p class="text-2xl font-medium">Years of Experience</p>
			<p class="mt-2 text-base opacity-70">Design, Branding and Identity</p>
		</div>
		<!-- programming experience -->
		<div
			class="col-span-6 row-start-3 flex h-44 flex-col items-end justify-center pr-8"
		>
			<p class="text-2xl font-medium">Years of Experience</p>
			<p class="mt-2 text-base opacity-70">
				Website Development and General Purpose Programming
			</p>
		</div>
		<div
			class="col-span-2 row-start-3 flex h-44 items-center justify-center bg-darkgray"
		>
			<p class="text-7xl font-medium">4</p>
		</div>
		<!-- image -->
		<div
			class="col-span-8 row-start-4 mt-32 flex h-[65vh] items-center justify-center overflow-hidden bg-darkgray"
		>
			<img src="images/me.jpg" alt="" class="opacity-50 mix-blend-luminosity hover:opacity-70 transition-all delay-75" />
		</div>
	</div>
	<!-- end info + image with sidebar -->
</div>
<!-- end about me -->
<!-- contact + footer -->
<div class="mx-auto font-aeonik text-white ">
	<ContactCta />
	<Footer />
</div>
<!-- end contact + footer -->
