<script lang="ts">
	import Introduction from '$lib/components/project/Introduction.svelte';
	import ProjectContainer from '$lib/components/project/containers/ProjectContainer.svelte';
	import SmallProjectContainer from '$lib/components/project/containers/SmallProjectContainer.svelte';
	import ImageCard from '$lib/components/project/ImageCard.svelte';
	import Quote from '$lib/components/project/Quote.svelte';
	import Callout from '$lib/components/project/Callout.svelte';
	import Headline from '$lib/components/project/Headline.svelte';
	import Text from '$lib/components/project/Text.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NextCase from '$lib/sections/NextCase.svelte';
	import ImageContainer from '$lib/components/project/containers/Images/ImageContainer.svelte';
	import ProjectTitle from '$lib/components/project/ProjectTitle.svelte';
</script>

<title>Shargan Consulting - Enes Bala</title>

<div class="mt-24  w-full font-aeonik lg:mt-24">
	<!-- make template -->
	<ProjectTitle projectName="Click Properties">
		<span slot="description">
			Emerging Real Estate <br />
			Company in Tirana
		</span>
	</ProjectTitle>

	<ImageCard fullscreen topMargin image="clickproperties/heroImage_1.svg" description="View of all List4Free screens" />
	<ProjectContainer>
		<Introduction>
			Click Properties is a Real Estate company based in Tirana, Albania. It seeks to find properties for their clients,
			which will 'CLICK' the moment they lay eyes on them.
			<br /><br />
			Click Properties maintains a modern and professional profile, and being that it is a new entry on an already established
			industry, the challenge faced while building their identity, was creating a mark which would remain engrained on all
			who happened to observe it, and as to the client's liking, also tied to the concept of 'Property', through the usage
			of the keyhole symbol.
		</Introduction>
	</ProjectContainer>
	<ImageCard fullscreen image="sharganconsulting/heroImage_2.svg" description="View of all List4Free screens" />

	<SmallProjectContainer topOnly>
		<Callout
			title="Branding Elements"
			text={`To create the contrast of 'past' and 'future', a modern symbol was used, minimal enough to be paired with a 'vintage' serif wordmark.`}
		/>
		<ImageContainer>
			<div slot="firstCol">
				<ImageCard image="clickproperties/grid1/1.jpg" description="'S' Wordmark" aspectGridItem />
				<ImageCard image="clickproperties/grid1/2.jpg" description="Shargan Consulting Wordmark" aspectGridItem />
			</div>
			<div slot="secondCol">
				<ImageCard image="clickproperties/grid1/3.jpg" description="Stylised Logo Usage" aspectGridItem />
				<ImageCard image="clickproperties/grid1/4.jpg" aspectGridItem />
			</div>
		</ImageContainer>
	</SmallProjectContainer>
	<ProjectContainer topOnly>
		<ProjectContainer noMargin noPadding>
			<Headline>Identity and <br class="hidden lg:block" />alternate usage</Headline>
		</ProjectContainer>
		<ProjectContainer customMargin="mt-24 lg:mt-48" noPadding>
			<ImageContainer noMargin>
				<div slot="firstCol">
					<ImageCard image="sharganconsulting/grid2/1.jpg" aspectGridItem />
				</div>
				<div slot="secondCol">
					<ImageCard image="sharganconsulting/grid2/2.jpg" aspectGridItem />
				</div>
			</ImageContainer>
			<ImageCard customAttribute="mt-8" aspectVideo image="sharganconsulting/heroImage3.jpg" />
			<div class="mt-8 w-full overflow-hidden rounded-md">
				<picture>
					<source media="(min-width:1024px)" srcset="/images/projects/sharganconsulting/stylised.svg" />
					<img
						src="/images/projects/sharganconsulting/stylisedMobile.svg"
						alt="Shargan Consulting Branding Assets"
						class=" h-full w-full rounded-md object-cover dark:hidden"
					/>
				</picture>
				<picture>
					<source media="(min-width:1024px)" srcset="/images/projects/sharganconsulting/stylisedDark.svg" />
					<img
						src="/images/projects/sharganconsulting/stylisedDarkMobile.svg"
						alt="Shargan Consulting Branding Assets"
						class=" hidden h-full w-full rounded-md object-cover dark:block"
					/>
				</picture>
			</div>

			<!-- <ImageCard customAttribute="mt-8" image="sharganconsulting/stylised.svg" /> -->
		</ProjectContainer>
	</ProjectContainer>
	<SmallProjectContainer topOnly={true}>
		<Quote person="Klodjan Shaqiri">
			We’d like to express our sincere gratitude to Cuberto for their contribution to the development of our product.
			<br /><br />
			After over 2 years of tight cooperation, the team proved to be highly qualified specialists and took on a big chunk
			of work, starting with logo & brand identity for two DSX products, and moving forward with a complete website development,
			two native mobile applications development for iOS / Android and the design of our internal platform.
		</Quote>
	</SmallProjectContainer>
</div>
<NextCase />

<Footer />
