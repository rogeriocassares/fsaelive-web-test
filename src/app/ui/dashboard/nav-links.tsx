"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Overall", href: "/dashboard/invoices/overall", icon: UserGroupIcon },
  { name: "Vehicle", href: "/dashboard/invoices/vehicle", icon: UserGroupIcon },
  { name: "Penalties", href: "/dashboard/invoices/penalties", icon: UserGroupIcon },
  { name: "Cost", href: "/dashboard/invoices/cost", icon: UserGroupIcon },
  { name: "Design", href: "/dashboard/invoices/design", icon: UserGroupIcon },
  { name: "Presentation", href: "/dashboard/invoices/presentation", icon: UserGroupIcon },
  { name: "Acceleration", href: "/dashboard/invoices/acceleration", icon: UserGroupIcon },
  { name: "SkidPad", href: "/dashboard/invoices/skidpad", icon: UserGroupIcon },
  { name: "Autocross", href: "/dashboard/invoices/autocross", icon: UserGroupIcon },
  { name: "Enduro", href: "/dashboard/invoices/enduro", icon: UserGroupIcon },
  { name: "Efficiency", href: "/dashboard/invoices/efficiency", icon: UserGroupIcon },
  { name: "EnduroLapTime", href: "/dashboard/invoices/endurolaptime", icon: UserGroupIcon },
  { name: "Teams", href: "/dashboard/invoices/teams", icon: UserGroupIcon },
  { name: "Customers", href: "/dashboard/invoices/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-gray-900 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-gray-100 text-gray-900": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
