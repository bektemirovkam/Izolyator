import { Loader } from "@/components/loader";
import { Product } from "@/types/product";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

interface ProductsListProps {
  products: Product[];
  loading?: boolean;
}

export const ProductsList = ({ products, loading }: ProductsListProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 2xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3">
      {loading ? (
        <Loader />
      ) : (
        products.map((p) => {
          return (
            <Link
              href={`/${p.attributes.category.data.attributes.slug}/${p.attributes.slug}`}
              key={p.id}
              className="block h-full"
            >
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none rounded-none flex-col h-full justify-between p-2"
              >
                <Image
                  alt={p.attributes.name}
                  className="object-cover flex-auto"
                  height={200}
                  src={
                    p.attributes.preview?.data?.attributes?.formats?.small
                      ?.url || p.attributes.preview?.data?.attributes?.url
                  }
                  width={"100%"}
                />
                <CardFooter className="justify-center">
                  <p className="text-center text-green-700 font-bold">
                    {p.attributes.name}
                  </p>
                </CardFooter>
              </Card>
            </Link>
          );
        })
      )}
    </div>
  );
};
