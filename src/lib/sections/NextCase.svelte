<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import LineUnderText from '$lib/components/LineUnderText.svelte';
	import ProjectContainer from '$lib/components/project/containers/ProjectContainer.svelte';
	import { projects } from '$lib/projects/projects';

	const url = $page.url.pathname;
	let projectId: string = url.split('/')[2];

	let currentIndex: number = 0;
	let nextIndex: number = 0;
	currentIndex = projects
		.map((project) => project.id)
		.indexOf(projectId);
	nextIndex = ++currentIndex % projects.length;
</script>

<ProjectContainer customMargin="flex items-center justify-center h-[40vh] lg:h-[90vh] lg:my-0">
	<LineUnderText link custom central>
		<button
			on:click={() => {
				goto(`/projects/${projects[nextIndex].id}`);
			}}
			class="text-4xl leading-normal lg:text-8xl"
		>
			Next Case
		</button>
	</LineUnderText>
</ProjectContainer>
