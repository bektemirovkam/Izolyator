import { Contacts } from "@/types/contacts";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { EmailIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";

interface ContactsBarProps {
  contacts: Contacts;
}

export const ContactsBar = ({ contacts }: ContactsBarProps) => {
  return (
    <NextUINavbar
      maxWidth="full"
      classNames={{
        wrapper: ["p-0 max-w-none"],
      }}
    >
      <NavbarContent className="flex" justify="end">
        <NavbarItem className="mr-3">
          <Link
            aria-label="Телефон"
            href={`tel:${contacts.attributes.phone}`}
            className="text-foreground text-xs"
          >
            <PhoneIcon size={20} fill="rgb(82, 196, 26)" className="mr-2" />
            <span>{contacts.attributes.phone}</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            aria-label="Email"
            href={`mailto:${contacts.attributes.email}`}
            className="text-foreground text-xs"
          >
            <EmailIcon size={20} fill="rgb(82, 196, 26)" className="mr-2" />
            <span>{contacts.attributes.email}</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            aria-label="Whatsapp"
            href={`https://wa.me/${contacts.attributes.whatsapp}`}
            className="text-foreground text-xs"
          >
            <WhatsAppIcon size={20} fill="rgb(82, 196, 26)" className="mr-2" />
            <span>{contacts.attributes.whatsapp}</span>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
