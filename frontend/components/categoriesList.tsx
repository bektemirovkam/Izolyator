import { Category } from "@/types/category";
import { Card, CardFooter, Image, Link } from "@nextui-org/react";

interface CategoriesListProps {
  categories: Category[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="flex gap-3 flex-wrap justify-center sm:justify-between xl:justify-start">
      {categories.map((c) => {
        return (
          <Link href={`/catalog/${c.attributes.slug}`} key={c.id}>
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none rounded-none"
            >
              <Image
                alt={c.attributes.name}
                className="object-cover"
                height={200}
                src={
                  c.attributes.preview?.data?.attributes?.formats.small?.url ||
                  c.attributes.preview?.data?.attributes?.url
                }
                width={200}
              />
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-center">{c.attributes.name}</p>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
