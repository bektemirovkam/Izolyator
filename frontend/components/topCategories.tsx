import { Category } from "@/types/category";

interface TopCategoriesProps {
  categories: Category[];
}

export const TopCategories = ({ categories }: TopCategoriesProps) => {
  return (
    <div>
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
      {categories.map((c) => (
        <h1 key={c.id}>{c.attributes.name}</h1>
      ))}
    </div>
  );
};
