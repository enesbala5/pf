<script lang="ts">
	import Introduction from '$lib/components/project/Introduction.svelte';
	import ProjectContainer from '$lib/components/project/containers/ProjectContainer.svelte';
	import SmallProjectContainer from '$lib/components/project/containers/SmallProjectContainer.svelte';
	import ImageCard from '$lib/components/project/ImageCard.svelte';
	import Callout from '$lib/components/project/Callout.svelte';
	import Headline from '$lib/components/project/Headline.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NextCase from '$lib/sections/NextCase.svelte';
	import ImageContainer from '$lib/components/project/containers/Images/ImageContainer.svelte';
	import ProjectTitle from '$lib/components/project/ProjectTitle.svelte';
</script>

<title>Universi - Enes Bala</title>

<div class="mt-24  w-full font-aeonik lg:mt-24">
	<!-- make template -->
	<ProjectTitle projectName="Universi Language Center">
		<span slot="description"> Albania's Leading Language Center </span>
	</ProjectTitle>

	<ImageCard fullscreen topMargin image="universi/heroImage_1.svg" description="View of all List4Free screens" />
	<ProjectContainer>
		<Introduction>
			Click Properties is a Real Estate company based in Tirana, Albania. It seeks to find properties for their clients,
			which will 'CLICK' the moment they lay eyes on them.
			<br /><br />
			Click Properties maintains a modern and professional profile, and being that it is a new entry on an already established
			industry, the challenge faced while building their identity, was creating a mark which would remain engrained on all
			who happened to observe it, and as to the client's liking, also tied to the concept of 'Property'.
		</Introduction>
	</ProjectContainer>
	<ProjectContainer>
		<ImageCard aspectVideo image="universi/universiLogo.jpg" />
	</ProjectContainer>
	<SmallProjectContainer>
		<Callout
			title="Unified Brand Image"
			text="I was prompted to create a unified design language, which would be the base of all Social Media content. It had to be professional and serve to distinguish all social media content from other competing brands."
		/>
	</SmallProjectContainer>
	<ProjectContainer>
		<ImageCard aspectVideo image="universi/heroImage_3.jpg" description="Initial Instagram Grid Design"/>
	</ProjectContainer>
	<SmallProjectContainer>
		<ImageContainer>
			<div slot="firstCol" class="space-y-8">
				<ImageCard aspectGridItem image="universi/gridItems/1.jpg" />
				<ImageCard aspectGridItem image="universi/gridItems/3.jpg" />
				<ImageCard aspectGridItem image="universi/gridItems/5.jpg" />
			</div>
			<div slot="secondCol" class="space-y-8">
				<ImageCard aspectGridItem image="universi/gridItems/2.jpg" />
				<ImageCard aspectGridItem image="universi/gridItems/4.jpg" />
				<ImageCard aspectGridItem image="universi/gridItems/6.jpg" />
			</div>
		</ImageContainer>
	</SmallProjectContainer>
	<SmallProjectContainer halfMargin>
		<Headline>Informing the audience with curated content</Headline>
	</SmallProjectContainer>
	<ImageCard
		fullscreen
		image="universi/calloutImages/carousel.jpg"
		altText="Carousel Posts for Universi Language Center by Enes Bala"
	/>
	<ProjectContainer>
		<ImageCard
			aspectVideo
			image="universi/calloutImages/groups.jpg"
			description="Timetable for each group in relation to the language for a 'Universi' Location."
			altText="Timetable for each group in relation to course language for a 'Universi' Location."
		/>
	</ProjectContainer>

	<SmallProjectContainer halfMargin>
		<Callout
			title="Targeted Campaign for Growing Market"
			text={`Universi recently began hosting the "ECL Language Test", which they wanted to advertise and promote. We worked towards that goal, through targeted campaigns on different Social Media Platforms.`}
		/>
	</SmallProjectContainer>
	<ImageCard
		fullscreen
		image="universi/heroImage_2.jpg"
		altText="Carousel Posts for Universi Language Center by Enes Bala"
	/>
	<SmallProjectContainer>
		<ImageContainer noMargin>
			<div slot="firstCol">
				<ImageCard aspectGridItem image="universi/ECL/1.jpg"></ImageCard>
			</div>
			<div slot="secondCol">
				<ImageCard aspectGridItem image="universi/ECL/2.jpg"></ImageCard>
			</div>
		</ImageContainer>
	</SmallProjectContainer>
	<ProjectContainer halfMargin topOnly>
		<ImageCard aspectVideo image="universi/ECL/stories.jpg" description="Stories designed for the ECL Campaign"></ImageCard>
	</ProjectContainer>
</div>
<NextCase />

<Footer />
