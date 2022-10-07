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
	<ProjectTitle projectName="Venustre Clothing">
		<span slot="description">Accessible <br class="hidden lg:block" />Personalized Clothing</span>
	</ProjectTitle>

	<ImageCard fullscreen topMargin image="venustre/heroImage_1.jpg" />
	<ProjectContainer>
		<Introduction>
			Venustre Clothing was a small brand I co-founded with a friend in 2019. It sold personalized, high-quality
			articles of clothing.
			<br /><br />
			The idea behind Venustre was merging my passion for Design with Clothing Apparel, and offering a service which at that
			time, was not available in Albania.
			<br /><br />
			I created new designs everyday based on my personal taste and the audience's feedback on the latest designs.
		</Introduction>
	</ProjectContainer>
	<ImageCard fullscreen topMargin image="venustre/heroImage_3.jpg" />

	<SmallProjectContainer>
		<Callout
			title="Simple and adaptive identity"
			text="The Venustre brand was created to be as minimal as possible, as we would had to cover a broad range of styles and trends, to present the potential options to our audience."
		/>
	</SmallProjectContainer>
	<SmallProjectContainer halfMargin>
		<ImageContainer noMargin>
			<div slot="firstCol">
				<ImageCard image="venustre/brand/logo.jpg" aspectGridItem />
			</div>
			<div slot="secondCol">
				<ImageCard image="venustre/brand/icons.jpg" aspectGridItem />
			</div>
		</ImageContainer>
	</SmallProjectContainer>
	<ProjectContainer halfMargin>
		<ImageCard image="venustre/brand/businessCard.jpg" aspectVideo />
	</ProjectContainer>
	<SmallProjectContainer>
		<Callout
			title="Infinite opportunities, infinite choice"
			text="When creating content for Social Media and designing apparel in general, I wanted to showcase some of the designs which were possible and guide the audience into potentially ordering for themselves."
		/>
	</SmallProjectContainer>
	<ProjectContainer halfMargin>
		<ImageCard
			image="venustre/posts/2.jpg"
			description="Design displayed on Hoodie Mockup,
				to give a better idea to customers of what to expect when ordering."
			aspectVideo
		/>
	</ProjectContainer>
	<SmallProjectContainer halfMargin>
		<ImageContainer>
			<div slot="firstCol">
				<ImageCard
					image="venustre/posts/4.jpg"
					aspectGridItem
					description="Popular Albanian Song Lyric meaning 'Money Calls, I answer it'"
				/>
			</div>
			<div slot="secondCol">
				<ImageCard image="venustre/posts/5.jpg" aspectGridItem />
			</div>
		</ImageContainer>
	</SmallProjectContainer>
	<ProjectContainer halfMargin>
		<div class="space-y-8">

		<ImageCard
			image="venustre/posts/1.jpg"
			description="Hoodie ordered by a client customized to contain all 'BTS' members' signatures."
			aspectVideo
		/>
		<ImageCard image="venustre/posts/3.jpg" description="Skeleton Design Hoodie - FW20 Collection" aspectVideo />
		</div>
	</ProjectContainer>

	<SmallProjectContainer topOnly>
		<Headline>
			Creating unique
			<br class="hidden lg:block" />designs on demand
		</Headline>
		<Text>
			It was a fun process creating clothing pieces in which clients were personally involved, as they were the ideators
			behind the design and every piece held genuine meaning to them. This was challenging as there was more pressure
			overall but helped me learn to better understand the needs and wants of each client.
		</Text>
	</SmallProjectContainer>
	<ImageCard fullscreen topMargin image="venustre/custom/heroImage_2.svg" />
	<ProjectContainer halfMargin topOnly>
		<ImageCard
			image="venustre/custom/heroImage_5.jpg"
			aspectVideo
			description="A drawing, vectorized and refined, turned to a T-Shirt which has great sentimental value for the family."
		/>
	</ProjectContainer>
</div>

<NextCase />
<Footer />
