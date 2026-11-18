import Container from "../ui/Container";
import { socialLinks } from "@/features/home/data/footer";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import Reveal from "@/components/animations/Reveal";
import { footerContact } from "@/features/home/data/footer";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-aepy-chocolate text-aepy-cream">
      {/* Symmetrical Cream Wave - Desktop Only */}
      <div className="absolute inset-x-0 top-0 hidden h-24 overflow-hidden lg:block">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0 H1440 V70 C1320 70 1320 28 1170 28 C1020 28 1020 82 720 82 C420 82 420 28 270 28 C120 28 120 70 0 70 Z"
            fill="#F8F4E9"
          />

          <path
            d="M0 70 C120 70 120 28 270 28 C420 28 420 82 720 82 C1020 82 1020 28 1170 28 C1320 28 1320 70 1440 70"
            fill="none"
            stroke="#E6C9A3"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Container>
        <div className="relative z-10 pt-24 pb-7 sm:pt-28 lg:pt-32">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.5fr_1fr_0.8fr] lg:gap-10">
            {/* Brand */}

            <Reveal direction="up" delay={0.1} duration={0.7}>
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center lg:justify-start">
                <img
                  src="/images/original/logo/footer-aepy-logo.png"
                  alt="Aepy Bakery - Since 1965"
                  className="w-32 shrink-0 object-contain sm:w-36"
                />

                <div className="hidden h-24 w-px bg-aepy-cream/30 sm:block" />

                <div className="text-center sm:text-left">
                  <h2 className="font-serif text-2xl font-bold leading-tight sm:text-3xl">
                    Crafting Taste.
                    <br />
                    <span className="text-aepy-orange">Creating Memories.</span>
                  </h2>
                  <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-aepy-orange sm:mx-0" />
                </div>
              </div>
            </Reveal>

            {/* Get in Touch */}
            <Reveal direction="up" delay={0.2} duration={0.7}>
              <div className="flex flex-col items-center gap-4 border-t border-aepy-cream/20 pt-7 lg:items-start lg:border-l lg:border-t-0 lg:py-3 lg:pl-8">
                <h3 className="font-serif text-xl font-semibold">
                  Get in Touch
                </h3>

                <a
                  href={`tel:${footerContact.phone}`}
                  className="group flex items-center gap-3 text-sm transition-colors hover:text-aepy-orange sm:text-base"
                >
                  <FaPhone size={19} className="shrink-0 text-aepy-orange" />
                  <span>{footerContact.phone}</span>
                </a>

                <a
                  href={`mailto:${footerContact.email}`}
                  className="group flex items-center gap-3 text-sm transition-colors hover:text-aepy-orange sm:text-base"
                >
                  <IoMail size={19} className="shrink-0 text-aepy-orange" />
                  <span className="break-all">{footerContact.email}</span>
                </a>
              </div>
            </Reveal>

            {/* Follow Us */}
            <Reveal direction="up" delay={0.3} duration={0.7}>
              <div className="flex flex-col items-center gap-5 border-t border-aepy-cream/20 pt-7 lg:items-start lg:border-l lg:border-t-0 lg:py-3 lg:pl-8">
                <h3 className="font-serif text-xl font-semibold">Follow Us</h3>

                <div className="flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex size-10 items-center justify-center rounded-lg border border-aepy-orange/70 text-aepy-cream
                     transition-all duration-500 hover:-translate-y-1 hover:bg-aepy-orange hover:text-aepy-chocolate"
                    >
                      <Icon size={19} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Divider */}
          <div className="my-7 h-px bg-aepy-cream/40" />

          {/* Copyright */}
          <Reveal direction="up" delay={0.1} duration={0.6}>
            <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-aepy-cream/80 sm:flex-row sm:text-sm">
              <p>
                © {new Date().getFullYear()} Aepy Bakery. All rights reserved.
              </p>

              <p className="font-serif text-sm italic sm:text-base">
                Made with care{" "}
                <span className="font-semibold text-aepy-orange">
                  since 1965
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
