import { Metadata } from "next";

export const metadata: Metadata = {
  title: "О нас",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-auto flex flex-col items-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg justify-center">{children}</div>
    </section>
  );
}
