<script>
  import ImageCard from '$lib/components/project/ImageCard.svelte';
  import ProjectTitle from '$lib/components/project/ProjectTitle.svelte';
import NextCase from '$lib/sections/NextCase.svelte';

</script>
<div class="mt-24  w-full font-aeonik lg:mt-24">
	<ProjectTitle projectName="Venustre Clothing">
		<span slot="description">Accessible Customized Clothing</span>
	</ProjectTitle>
	<ImageCard
		fullscreen
		topMargin
		image="list4free/test.jpg"
		description="View of all List4Free screens"
	/>
</div>
