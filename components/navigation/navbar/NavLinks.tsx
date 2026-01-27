"use client";

import React from "react";
import { SheetClose } from "@/components/ui/sheet";
import { SIDE_BAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathName = usePathname();
  const userId = 1;

  return (
    <>
      {SIDE_BAR_LINKS.map((link) => {
        const isActive =
          (pathName.includes(link.route) && link.route.length > 1) ||
          pathName === link.route;

        if (link.route === "/profile") {
          if (userId) link.route = `${link.route}/${userId}`;
          else return null;
        }

        const linkComponent = (
          <Link
            href={link.route}
            key={link.label}
            className={cn(
              isActive
                ? "primary-gradient text-light-900 rounded-lg"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 p-4",
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={cn({ "invert-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden",
              )}
            >
              {link.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={link.route}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={link.route}>{linkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
