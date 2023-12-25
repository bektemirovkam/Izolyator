"use client";

import { ProductsList } from "@/components/productsList";
import { Button, Input } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setSearch(target.value);
  };

  return (
    <div>
      <div className="flex items-center">
        <Input
          type="text"
          variant="flat"
          label="Поиск"
          className="mr-8"
          value={search}
          onChange={onSearchChange}
        />
        <Button color="default" className="bg-brand-color text-white" size="lg">
          Найти
        </Button>
      </div>
    </div>
  );
};
