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
	import Text from '$lib/components/project/Text.svelte';
</script>

<title>Venustre - Enes Bala</title>

<div class="mt-24  w-full font-aeonik lg:mt-24">
	<!-- make template -->
	<ProjectTitle projectName="Softoptech">
		<span slot="description">Software Company serving Global Market</span>
	</ProjectTitle>

	<ImageCard fullscreen topMargin image="softoptech/heroImage/main.jpg" />
	<ProjectContainer>
		<Introduction>
			Softoptech is a Software Development company based in Albania, serving the local market, and also offering
			reliable partnerships and collaborations on projects for remote companies.
			<br /><br />
			The purpose of the rebranding was to increase perceived brand value as they stepped further into offering their services
			internationally.
			<br /><br />
			The company seeks to appear professional and solid, as they pride themselves on their experience and expertise.
		</Introduction>
	</ProjectContainer>
	<ProjectContainer>
		<ImageCard aspectVideo image="softoptech/heroImage_8.jpg" />
	</ProjectContainer>
	<SmallProjectContainer topOnly>
		<Callout
			title="Presented options"
			text="While creating the logo, which had to be understated yet solid and professional, I went through many iterations of logomarks and typefaces, trying to find the perfect match."
		/>
	</SmallProjectContainer>
	<ProjectContainer halfMargin>
		<ImageCard aspectVideo image="softoptech/showcase.jpg" description="Some of the options presented to the client." />
	</ProjectContainer>

	<SmallProjectContainer topOnly>
		<Headline>The option we decided on</Headline>
	</SmallProjectContainer>

	<ProjectContainer halfMargin>
		<ImageCard aspectVideo image="softoptech/final/logo.jpg" />
	</ProjectContainer>

	<SmallProjectContainer noMargin>
		<ImageContainer>
			<div slot="firstCol">
				<ImageCard
					image="softoptech/final/gridItem_2.jpg"
					description="A modern sans-serif font, meant to be minimal and direct attention to the logomark."
					aspectGridItem
				/>
			</div>
			<div slot="secondCol">
				<ImageCard
					image="softoptech/final/gridItem_1.jpg"
					description="Simple yet bold logomark, the key elements of a memorable logo."
					aspectGridItem
				/>
			</div>
		</ImageContainer>
	</SmallProjectContainer>

	<ProjectContainer halfMargin>
		<ImageCard
			aspectVideo
			image="softoptech/final/beforeAfter.jpg"
			description="Before and After - Evolution of the Logo"
		/>
	</ProjectContainer>

	<SmallProjectContainer topOnly>
		<Headline>Usage and application</Headline>
		<Text>
			Softoptech was also provided with a Brand Guideline, which highlights detailed explanations of right and wrong applications of the logo, for it's internal and external application.
		</Text>
	</SmallProjectContainer>
	<ImageCard
		fullscreen
		topMargin
		image="softoptech/heroImage_6.svg"
		altText="Image of the Softoptech New Logo - Enes Bala"
	/>
	<ProjectContainer halfMargin topOnly>
		<div class="space-y-8">
		<ImageCard
			aspectVideo
			image="softoptech/final/mockup_2.jpg"
		/>
		<ImageCard
			aspectVideo
			image="softoptech/final/mockup.jpg"
		/>
		<ImageCard
			aspectVideo
			image="softoptech/heroImage_2.jpg"
		/>
		</div>
	</ProjectContainer>
</div>

<NextCase />
<Footer />
