import { Product } from "@/types/product";
import { Category } from "@/types/category";
import { getSiteMapCategories } from "@/services/categories";
import { getSiteMapProducts } from "@/services/products";

const DOMEN = process.env.DOMEN;

function generateSiteMap(products: Product[], categories: Category[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${DOMEN}</loc>
     </url>
     <url>
       <loc>${DOMEN}/catalog</loc>
     </url>
      <url>
       <loc>${DOMEN}/faq</loc>
     </url>
      <url>
       <loc>${DOMEN}/delivery</loc>
     </url>
      <url>
       <loc>${DOMEN}/contacts</loc>
     </url>
     ${categories
       .map((c) => {
         return `
            <url>
                <loc>${`${DOMEN}/catalog/${c.attributes.slug}`}</loc>
            </url>
          `;
       })
       .join("")}

     ${products
       .map((p) => {
         return `
           <url>
               <loc>${`${DOMEN}/catalog/${p.attributes.category.data.attributes.slug}/${p.attributes.slug}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}

export async function GET() {
  const categories = await getSiteMapCategories();
  const products = await getSiteMapProducts();
  const body = generateSiteMap(products.data, categories.data);

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
