export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center mt-4 h-full">
      <div className="border flex-auto w-full items-center justify-center">
        {children}
      </div>
    </section>
  );
}
