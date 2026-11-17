import Container from "@/components/ui/Container";
import AepyOutletShowcase from "./AepyOutletShowcase";
import BlissShowcase from "./BlissShowcase";

const OurOutlets = () => {
  return (
    <section
      id="our-outlets"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        <AepyOutletShowcase />
        <BlissShowcase />
      </Container>
    </section>
  );
};

export default OurOutlets;
