export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-4 py-8 md:py-10 flex-auto">
      <div className="flex justify-center">{children}</div>
    </section>
  );
}
