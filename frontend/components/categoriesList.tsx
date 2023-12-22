import { Category } from "@/types/category";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

interface CategoriesListProps {
  categories: Category[];
}

export const CategoriesList = ({ categories }: CategoriesListProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((c) => {
        return (
          <Card shadow="sm" key={c.id} className="border-none" isPressable>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                alt={c.attributes.name}
                className="object-cover h-[360px] w-[360px]"
                src={c.attributes.preview?.data.attributes.formats.small?.url}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{c.attributes.name}</b>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
