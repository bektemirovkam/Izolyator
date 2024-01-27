"use client";

import { ArrowBackIcon } from "@/components/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

interface ProductBackBtnProps {
  url: string;
  returnUrl?: string;
}

export const ProductBackBtn = ({ url, returnUrl }: ProductBackBtnProps) => {
  const router = useRouter();

  const onBack: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (returnUrl) {
      event.preventDefault();
      router.replace(returnUrl);
    }
  };

  return (
    <Link
      className="mr-4"
      onClick={returnUrl ? onBack : undefined}
      href={returnUrl || url}
    >
      <ArrowBackIcon />
    </Link>
  );
};
