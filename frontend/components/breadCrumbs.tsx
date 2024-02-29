"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export interface BreadCrumb {
  link: string;
  title: string;
}

interface BreadCrumbsProps {
  breadCrumbs: BreadCrumb[];
}

export const BreadCrumbs = ({ breadCrumbs }: BreadCrumbsProps) => {
  const pathname = usePathname();

  return (
    <nav className="mb-4">
      <ul className="flex gap-3">
        {breadCrumbs.map((b, index) => (
          <li
            key={b.title}
            className={"flex-auto flex justify-center items-center gap-1"}
          >
            {index !== 0 && <span>/ </span>}
            <Link
              className={clsx(
                "text-xs sm:text-sm md:text-base",
                {
                  "text-brand-color": false,
                },
                "truncate",
                "underline"
                // `max-w-[${Math.floor(100 / breadCrumbs.length / 5)}%]`
              )}
              href={b.link}
            >
              {b.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
