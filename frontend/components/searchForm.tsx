"use client";

import { ProductsList } from "@/components/productsList";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Product } from "@/types/product";
import { Button, Input, Link } from "@nextui-org/react";
import clsx from "clsx";
import { ChangeEvent, FormEvent, useState } from "react";

const MIN_LENGTH = 2;

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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <form className="flex items-center" onSubmit={onSubmit}>
        <Input
          type="text"
          variant="flat"
          label="Введите название товара или артикул"
          className="mr-4 md:mr-8"
          value={search}
          onChange={onSearchChange}
        />
        <Button
          color="default"
          className={clsx({
            "bg-brand-color text-white": search.length >= MIN_LENGTH,
          })}
          size={smallScreen ? "md" : "lg"}
          disabled={search.length < MIN_LENGTH}
          type="submit"
        >
          Найти
        </Button>
      </form>
      <div className="mt-5">
        {isEmpty ? (
          <>
            <p>По вашему запросу ничего не найдено.</p>
            <p>
              Попробуйте написать ваш поисковый запрос по-другому, сократив
              количество символов или воспользуйтесь 
              <Link href="/">каталогом</Link>.
            </p>
          </>
        ) : (
          <ProductsList products={products} loading={loading} />
        )}
      </div>
    </div>
  );
};
