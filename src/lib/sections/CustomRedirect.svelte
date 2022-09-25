<script lang="ts">
	import { goto } from '$app/navigation';
	import LineUnderText from '$lib/components/LineUnderText.svelte';
	import ProjectContainer from '$lib/components/project/containers/ProjectContainer.svelte';

	export let link: string;
</script>

<ProjectContainer
	customMargin="flex items-center justify-center h-[40vh] lg:h-[90vh] lg:my-0"
>
	<LineUnderText link custom central>
		<button
			on:click={() => {
				goto(link);
			}}
			class="text-4xl leading-normal lg:text-8xl"
		>
			<slot />
		</button>
	</LineUnderText>
</ProjectContainer>
