import PageHero from "@/components/layout/PageHero";

const ContactHero = () => {
  return (
    <PageHero
      eyebrow="Get in Touch"
      breadcrumbLabel="Contact"
      title={
        <>
          We'd Love to
          <br className="md:hidden lg:block" />
          Hear From <span className="text-aepy-orange">You.</span>
        </>
      }
      description="Have a question, need assistance, or want to know more about Aepy Bakery? We're always happy to connect with you."
      image="/images/original/contact/aepy-contact-hero.png"
      imageAlt="Vintage Aepy Bakery storefront with a rotary telephone and correspondence"
    />
  );
};

export default ContactHero;
