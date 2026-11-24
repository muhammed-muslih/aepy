import PageHero from "@/components/layout/PageHero";

const ManufacturingHero = () => {
  return (
    <PageHero
      eyebrow="Aepy Foods"
      breadcrumbLabel="Manufacturing"
      title={
        <>
          Behind Every
          <br className="md:hidden lg:block" />
          <span className="text-aepy-orange"> Delightful Bite.</span>
        </>
      }
      description="From everyday bakery favourites to speciality cakes, our manufacturing facilities support the products enjoyed across Aepy outlets."
      image="/images/original/manufacturing/manufacturing-hero.png"
      imageAlt="Illustration of Aepy Foods manufacturing facility"
    />
  );
};

export default ManufacturingHero;
