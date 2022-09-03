<script>
	import Footer from "$lib/components/Footer.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { projects } from "$lib/projects/projects";
</script>

<title>Work - Enes Bala</title>

<!-- work -->
<div class="mx-auto mt-24 lg:w-10/12 w-full p-4 font-aeonik">
	<h1 class="headline">Projects</h1>
	<div
		id="skills"
		class="relative mx-auto lg:mt-24 mt-12 mb-12 grid grid-cols-10 gap-2 gap-y-12 text-xl"
	>
		<!-- titlebar -->
		<div class="col-span-2 col-start-2">
			<p class="font-medium">All categories</p>
		</div>
		<div class="col-span-6 col-start-5 flex cursor-pointer justify-end">
			<div class="flex cursor-pointer items-center space-x-4 opacity-70">
				<p class="text-base ">Filter</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>
		</div>
		<!-- end titlebar -->

		<!-- project -->
		{#each projects as project, i}
			<div
				class="col-span-8 flex items-center space-x-2 odd:col-start-2 even:col-start-3"
			>
				<ProjectCard
					projectName={project.projectName}
					projectDescription={project.projectDescription}
					category={project.category}
					projectId={project.id}
				/>
			</div>
		{/each}
	</div>
</div>
<!-- end contact -->

<!-- footer -->
<div class="mx-auto mt-96 font-aeonik">
	<Footer />
</div>
