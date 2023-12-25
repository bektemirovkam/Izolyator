import { CircularProgress } from "@nextui-org/react";

export const Loader = () => {
  return (
    <div className="flex-auto flex items-center justify-center w-full h-full">
      <CircularProgress
        classNames={{
          svg: "w-24 h-24",
          indicator: "stroke-brand-color",
        }}
        aria-label="Идет загрузка..."
      />
    </div>
  );
};
