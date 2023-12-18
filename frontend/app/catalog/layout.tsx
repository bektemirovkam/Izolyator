export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center mt-4 h-full">
      <div className="container mx-auto px-4 border flex-auto">{children}</div>
    </section>
  );
}
