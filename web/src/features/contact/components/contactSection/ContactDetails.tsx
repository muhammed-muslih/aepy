import { contactItems } from "../../data/contactInfo";
import { SiInstagram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-aepy-caramel/60 bg-white/40 p-6 shadow-sm sm:p-8 lg:p-9">
      <span className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-aepy-orange sm:text-sm">
        Contact Information
      </span>

      <h3 className="font-heading text-3xl font-semibold tracking-tight text-aepy-chocolate sm:text-4xl">
        Reach Us Anytime.
      </h3>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base">
        Get in touch with us through your preferred channel. We&apos;re always
        happy to hear from you.
      </p>

      {/* Contact Information List */}
      <div className="mt-7 flex-1">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b border-aepy-caramel/60 py-3 first:pt-0 last:border-b-0"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-aepy-orange/10 text-aepy-orange sm:size-14">
                <Icon size={23} strokeWidth={1.8} />
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <h4 className="font-heading text-base font-semibold text-aepy-chocolate sm:text-lg">
                  {item.label}
                </h4>

                <p className="max-w-57.5 text-sm leading-relaxed text-aepy-chocolate/80 sm:text-right">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <h4 className="font-heading text-lg font-semibold text-aepy-chocolate">
          Follow Us
        </h4>

        <span className="h-px w-8 bg-aepy-orange" />

        <div className="flex items-center gap-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-xl border border-aepy-caramel text-aepy-chocolate transition-all duration-300
            hover:border-aepy-orange hover:bg-aepy-orange hover:text-white hover:-translate-y-1 hover:shadow-md"
          >
            <SiInstagram size={19} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex size-10 items-center justify-center rounded-xl border border-aepy-caramel text-aepy-chocolate transition-all duration-300
            hover:border-aepy-orange hover:bg-aepy-orange hover:text-white hover:-translate-y-1 hover:shadow-md"
          >
            <FaFacebookF size={19} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex size-10 items-center justify-center rounded-xl border border-aepy-caramel text-aepy-chocolate transition-all duration-300 
            hover:border-aepy-orange hover:bg-aepy-orange hover:text-white hover:-translate-y-1 hover:shadow-md"
          >
            <FaWhatsapp size={19} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
