"use client";

import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { Product } from "@/types/product";
import Markdown from "react-markdown";
import { useEffect, useState } from "react";

interface ProductInfoProps {
  product: Product;
}


function removeLinksAndSaveChildren(htmlText: string) {
  // Создаем временный элемент div
  const tempDiv = document.createElement("div");

  // Вставляем HTML-текст во временный элемент
  tempDiv.innerHTML = htmlText;

  // Находим все теги 'a' (ссылки)
  const links = tempDiv.getElementsByTagName('a');
  
  // Проходим по каждой ссылке и сохраняем ее дочерние элементы
  for (let i = links.length - 1; i >= 0; i--) {
      const link = links[i];
      const children = Array.from(link.childNodes);
      
      // Заменяем ссылку ее дочерними элементами
      for (let j = 0; j < children.length; j++) {
          link.parentNode?.insertBefore(children[j].cloneNode(true), link);
      }

      // Удаляем ссылку
      link.parentNode?.removeChild(link);
  }

  // Получаем очищенный HTML-текст
  const resultHtml = tempDiv.innerHTML;

  return resultHtml;
}


export const ProductInfo = ({ product }: ProductInfoProps) => {

  const [text, setText] = useState("")

  

  useEffect(() => {
    const htmlText = product.attributes.description
    const resultHtml = removeLinksAndSaveChildren(htmlText);

    setText(resultHtml)
  }, [product.attributes.description])

  return (
    <div>
      <Markdown rehypePlugins={[rehypeRaw, rehypeSanitize]} className="mardown">
        {text}
      </Markdown>
    </div>
  );
};
