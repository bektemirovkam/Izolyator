import { getContacts } from "@/services/contacts";
import { formatPhoneNumber } from "@/utils/formatPhoneNumber";
import { Link } from "@nextui-org/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
};

// TODO: сделать через цмс

export default async function ContactsPage() {
  const data = await getContacts();

  return (
    <div className="flex-auto">
      <h1 className="text-3xl font-bold mb-4">Контакты</h1>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8 leading-8">
          <p className="text-gray-700">
            <span className="lg:whitespace-nowrap">
              <span className="font-bold">Юридический/Почтовый адрес:</span>
              {data.data.attributes.mailing_address}
            </span>
            <br />
            <span className="font-bold">Отдел продаж мобильный:</span>
            <Link href={`tel:${data.data.attributes.phone}`} className="mx-1">
              {formatPhoneNumber(data.data.attributes.phone)}
            </Link>
            {data.data.attributes.manager}
            <br />
            <span className="font-bold">Отдел продаж WhatsАpp:</span>
            <Link
              href={`https://wa.me/${data.data.attributes.whatsapp}`}
              className="mx-1"
            >
              {formatPhoneNumber(data.data.attributes.whatsapp)}
            </Link>
            {data.data.attributes.manager}
            <br />
            <span className="font-bold">Электронная почта:</span>
            <Link
              href={`mailto:enzakaz@bk.ru`}
              className="mx-1"
            >
              enzakaz@bk.ru
            </Link>
            или
            <Link
              href={`mailto:${data.data.attributes.email}`}
              className="mx-1"
            >
              {data.data.attributes.email}
            </Link>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}

export const revalidate = 300;
