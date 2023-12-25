import { Product } from "@/types/product";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

interface ProductsListProps {
  products: Product[];
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="flex gap-3 flex-wrap justify-center sm:justify-between xl:justify-start">
      {products.map((p) => {
        return (
          <Link
            href={`/catalog/${p.attributes.category.data.attributes.slug}/${p.attributes.slug}`}
            key={p.id}
          >
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none rounded-none"
            >
              <Image
                alt={p.attributes.name}
                className="object-cover"
                height={200}
                src={
                  p.attributes.preview?.data.attributes.formats.small?.url ||
                  p.attributes.preview?.data.attributes.url
                }
                width={200}
              />
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-center">{p.attributes.name}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
