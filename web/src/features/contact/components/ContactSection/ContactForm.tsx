import { ArrowRight } from "lucide-react";
import { FaRegUser } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SlPhone } from "react-icons/sl";
import { FaListUl } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from "react";
import CustomSelect from "@/components/ui/CustomSelect";
import { subjectOptions } from "../../data/contactInfo";

const inputClassName =
  "w-full rounded-xl border border-aepy-caramel bg-transparent px-4 py-3 text-sm text-aepy-chocolate outline-none transition-all placeholder:text-aepy-chocolate/50 focus:border-aepy-orange focus:ring-2 focus:ring-aepy-orange/10";

const labelClassName = "mb-2 block text-sm font-semibold text-aepy-chocolate";

const ContactForm = () => {
  const [subject, setSubject] = useState("");
  return (
    <div className="h-full rounded-3xl border border-aepy-caramel/60 bg-white/40 p-6 shadow-sm sm:p-8 lg:p-9">
      <span className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-aepy-orange sm:text-sm">
        Send an Enquiry
      </span>

      <h3 className="font-heading text-3xl font-semibold tracking-tight text-aepy-chocolate sm:text-4xl">
        How Can We Help You?
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base">
        Fill out the form below and we&apos;ll get back to you soon.
      </p>

      <form className="mt-8" onSubmit={(event) => event.preventDefault()}>
        <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className={labelClassName}>
              Full Name <span className="text-aepy-orange">*</span>
            </label>
            <div className="relative">
              <FaRegUser
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-aepy-chocolate/70"
              />
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your name"
                className={`${inputClassName} pl-11`}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClassName}>
              Email Address <span className="text-aepy-orange">*</span>
            </label>

            <div className="relative">
              <HiOutlineMail
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-aepy-chocolate/70"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className={`${inputClassName} pl-11`}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className={labelClassName}>
              Phone Number{" "}
              <span className="font-normal text-aepy-chocolate/60">
                (Optional)
              </span>
            </label>

            <div className="relative">
              <SlPhone
                size={18}
                strokeWidth={1.8}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-aepy-chocolate/70"
              />
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className={`${inputClassName} pl-11`}
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className={labelClassName}>
              Subject <span className="text-aepy-orange">*</span>
            </label>

            <div className="relative">
              <FaListUl
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-aepy-chocolate/70"
              />

              <CustomSelect
                id="subject"
                name="subject"
                value={subject}
                onChange={setSubject}
                options={subjectOptions}
                placeholder="Select a subject"
                required
                className="[&>button]:pl-11"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClassName}>
              Your Message <span className="text-aepy-orange">*</span>
            </label>

            <div className="relative">
              <FiMessageCircle
                size={20}
                className="absolute left-4 top-4 text-aepy-chocolate/70"
              />
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className={`${inputClassName} min-h-32 resize-y pl-11`}
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex flex-col items-start gap-4">
          <button
            type="submit"
            className="inline-flex min-w-48 items-center justify-center gap-4 rounded-full bg-aepy-orange px-7 py-4 
            text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-aepy-burnt hover:shadow-lg"
          >
            Send Enquiry
            <ArrowRight size={20} />
          </button>

          <div className="flex items-center gap-3">
            <HiOutlineMail size={22} className="shrink-0 text-aepy-orange" />

            <p className="text-xs leading-relaxed text-aepy-chocolate/75 sm:text-sm">
              We&apos;d love to hear from you.
              <br className="md:hidden" /> We&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
