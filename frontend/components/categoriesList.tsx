import { Category } from "@/types/category";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

interface CategoriesListProps {
  categories: Category[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    // <div className="flex gap-3 flex-wrap justify-center sm:justify-between xl:justify-start">
    <div className="grid grid-cols-5 gap-3">
      {categories.map((c) => {
        return (
          <Link href={`/${c.attributes.slug}`} key={c.id} className="h-full">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none rounded-none flex-col h-full justify-between p-2"
            >
              <Image
                alt={c.attributes.name}
                className="object-cover flex-auto"
                height={200}
                src={
                  c.attributes.preview?.data?.attributes?.formats.small?.url ||
                  c.attributes.preview?.data?.attributes?.url
                }
                width={200}
              />
              <CardFooter className="justify-center">
                <p className="text-center text-green-700 font-bold">
                  {c.attributes.name}
                </p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
