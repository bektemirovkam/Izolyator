"use client";

import { ProductsList } from "@/components/productsList";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Product } from "@/types/product";
import { Button, Input } from "@nextui-org/react";
import clsx from "clsx";
import { ChangeEvent, useState } from "react";

interface SearchForm {
  handleSearch: (search: string) => Promise<Product[]>;
}

export const SearchForm = ({ handleSearch }: SearchForm) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 650px)");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setSearch(target.value);
  };

  const onSubmit = async () => {
    setIsEmpty(false);
    setLoading(true);
    const products = await handleSearch(search);
    if (products.length === 0) {
      setIsEmpty(true);
    } else {
      setProducts(products);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center">
        <Input
          type="text"
          variant="flat"
          label="Поиск"
          className="mr-4 md:mr-8"
          value={search}
          onChange={onSearchChange}
        />
        <Button
          color="default"
          className={clsx({
            "bg-brand-color text-white": search.length > 3,
          })}
          size={smallScreen ? "md" : "lg"}
          onClick={onSubmit}
          disabled={search.length < 3}
        >
          Найти
        </Button>
      </div>
      <div className="mt-5">
        {isEmpty ? (
          <p>По вашему запросу ничего не найдено.</p>
        ) : (
          <ProductsList products={products} loading={loading} />
        )}
      </div>
    </div>
  );
};
