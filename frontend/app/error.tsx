"use client";

import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center h-full">
      <h2 className={title()}>Что то пошло не так!</h2>
      <Button className="mt-4" onClick={() => reset()} color="warning">
        Попробуйте еще раз
      </Button>
    </div>
  );
}
