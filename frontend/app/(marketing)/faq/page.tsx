import { getContacts } from "@/services/contacts";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { Link } from "@nextui-org/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как заказать",
};

// TODO: сделать через цмс

export default async function FaqPage() {
  const data = await getContacts();

  return (
    <div className="flex-auto">
      <h1 className="text-3xl font-bold mb-4">Как заказать</h1>

      <div className="max-w-2xl mx-auto">
        <ul className="mb-8 leading-7">
          <li className="mb-4">
            <p className="text-gray-700">
              <span className="font-bold">Отправить запрос</span> на электронную
              почту, по всем интересующим Вас позициям –{" "}
              <Link href={`mailto:enzakaz@bk.ru`} className="mr-1">
                {`enzakaz@bk.ru`}
              </Link>
              или 
              <Link className="ml-1" href={`mailto:${data.data.attributes.email}`}>
                {data.data.attributes.email}
              </Link>
              . Наши менеджеры предоставят вам КП с указание цены и сроков
              поставки товара, в течении одного рабочего дня.
            </p>
          </li>
          <li>
            <p className="text-gray-700">
              <span className="font-bold">Отправить запрос</span> на WhatsApp,
              на номер{" "}
              <Link href={`https://wa.me/${data.data.attributes.whatsapp}`}>
                {formatPhoneNumber(data.data.attributes.whatsapp)}
              </Link>
              , по всем интересующим Вас позициям. Наши менеджеры предоставят
              вам КП с указание цены и сроков поставки товара, в течении одного
              рабочего дня . Наши менеджеры предоставят вам КП с указание цены и
              сроков поставки товара, в течении одного рабочего дня.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
