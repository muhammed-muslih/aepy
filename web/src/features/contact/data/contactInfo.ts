import { SlPhone, SlLocationPin, SlClock } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export const contactItems = [
  {
    id: "phone",
    label: "Call Us",
    value: "+91 98765 43210",
    icon: SlPhone,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 98765 43210",
    icon: FaWhatsapp,
  },
  {
    id: "email",
    label: "Email Us",
    value: "aepy@bakery.com",
    icon: HiOutlineMail,
  },
  {
    id: "address",
    label: "Visit Us",
    value: "Aepy Bakery, Station Road, Miraj, Maharashtra - 416410",
    icon: SlLocationPin,
  },
  {
    id: "hours",
    label: "Working Hours",
    value: "Mon – Sun : 8:00 AM – 10:00 PM",
    icon: SlClock,
  },
];

export const subjectOptions = [
  { label: "General Enquiry", value: "general" },
  { label: "Product Information", value: "product" },
  { label: "Feedback", value: "feedback" },
  { label: "Other", value: "other" },
];
