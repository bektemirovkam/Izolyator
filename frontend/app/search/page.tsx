import { SearchForm } from "@/components/searchForm";
import { searchProducts } from "@/services/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Поиск",
};

export default function SearchPage() {
  const handleSearch = async (search: string) => {
    "use server";

    console.log("handleSearch ---> ", search);

    const products = await searchProducts(search);
    return products.data;
  };

  return (
    <div className="flex-auto py-4 container mx-auto">
      <SearchForm handleSearch={handleSearch} />
    </div>
  );
}
