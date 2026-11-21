import PageHero from "@/components/layout/PageHero";

const OutletsHero = () => {
  return (
    <PageHero
      eyebrow="Our Outlets"
      breadcrumbLabel="Our Outlets"
      title={
        <>
          Find Your
          <br />
          Favourite <span className="text-aepy-orange">Aepy.</span>
        </>
      }
      description="From freshly baked favourites to delightful treats, discover an Aepy Bakery outlet near you. We're always happy to welcome you."
      image="/images/original/outlets/outlets-page-hero.png"
      imageAlt="Vintage illustration of the Aepy Bakery storefront with a basket of fresh bread"
    />
  );
};

export default OutletsHero;
