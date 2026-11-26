import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import { whatsappUrl } from "@/constants/contact";
import { SlPhone } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";

const whatsappMessage = encodeURIComponent(
  "Hello Aepy Foods, I would like to enquire about your manufacturing and bulk order services.",
);

const whatsappUrlWithMessage = `${whatsappUrl}?text=${whatsappMessage}`;

const ManufacturingEnquiry = () => {
  return (
    <section
      id="manufacturing-enquiry"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div className="relative z-10">
            <Reveal direction="up" className="mb-4">
              <SectionEyebrow>Manufacturing Enquiry</SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <SectionHeading as="h2">
                Let's Create Something{" "}
                <span className="text-aepy-orange">Delicious Together.</span>
              </SectionHeading>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-6 max-w-xl text-sm leading-7 text-aepy-chocolate/80 sm:text-base sm:leading-8">
                Looking for a trusted bakery partner for bulk orders or business
                enquiries? Get in touch with Aepy Foods to discuss your
                requirements.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {/* Contact button */}
                <Button to="/contact" variant="primary" size="lg">
                  <SlPhone aria-hidden="true" className="size-5" />
                  Contact Us
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Button>

                {/* WhatsApp button */}
                <Button
                  href={whatsappUrlWithMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="lg"
                  className="text-aepy-orange border border-aepy-orange/10"
                >
                  <FaWhatsapp
                    aria-hidden="true"
                    className="text-aepy-orange size-6"
                  />
                  Chat on WhatsApp
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15} duration={0.8}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute right-4 top-4 aspect-square w-3/4 rounded-full bg-aepy-orange/20 sm:right-8 sm:top-6"
              />

              <div className="relative aspect-4/3 overflow-hidden rounded-4xl">
                <img
                  src="/images/original/manufacturing/manufacturing-enquiry-placeholder.png"
                  alt="Aepy Foods production team handling freshly baked pastries in the manufacturing facility"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />

                {/* Blend image into the cream background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-aepy-cream/90 to-transparent"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ManufacturingEnquiry;
