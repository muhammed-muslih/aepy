import PageHero from "@/components/layout/PageHero";

const OurStoryHero = () => {
  return (
    <>
      <PageHero
        variant="standard"
        imageBlend
        eyebrow="A Legacy of Taste · Since 1965"
        title={
          <>
            A Story Baked Into{" "}
            <span className="text-aepy-orange">Every Generation.</span>
          </>
        }
        description="From a small bakery near Miraj railway station to a legacy cherished across generations."
        breadcrumbLabel="Our Story"
        image="/images/original/story/our-story-hero.png"
        imageAlt="A glimpse into Aepy Foods' baking heritage"
      />
    </>
  );
};

export default OurStoryHero;
