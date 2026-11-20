import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-aepy-cream py-14 sm:py-18 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full border border-aepy-orange/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full border border-aepy-orange/10"
      />
      <Container>
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <Reveal direction="up">
            <SectionEyebrow className="mb-4 justify-center">
              Get in Touch
            </SectionEyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <SectionHeading as="h2">
              Let&apos;s Stay{" "}
              <span className="text-aepy-orange">Connected.</span>
            </SectionHeading>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
              Have a question, need assistance, or want to place a special
              enquiry? We&apos;re here to help.
            </p>
          </Reveal>

          {/* Small decorative divider */}
          <Reveal direction="scale" delay={0.3}>
            <div className="mx-auto mt-7 flex w-48 items-center gap-3">
              <span className="h-px flex-1 bg-aepy-orange/70" />
              <span className="h-2 w-2 rotate-45 bg-aepy-orange" />
              <span className="h-px flex-1 bg-aepy-orange/70" />
            </div>
          </Reveal>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">
          <Reveal direction="left" className="h-full">
            <ContactDetails />
          </Reveal>

          <Reveal direction="right" delay={0.1} className="h-full">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
