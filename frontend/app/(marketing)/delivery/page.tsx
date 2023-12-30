import { getContacts } from "@/services/contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оплата и доставка",
};

export default async function DeliveryPage() {
  const data = await getContacts();

  return (
    <div className="flex-auto">
      <h1 className="text-3xl font-bold mb-4">Оплата и доставка</h1>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Способы оплаты:</h2>
          <p className="text-gray-700">
            <span className="font-bold">Безналичный расчет:</span> Вы можете
            оплатить по банковским реквизитам, указанным в счете. Оплата
            считается совершенной в момент поступления денег на счет Получателя.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Реквизиты компании:</h2>
          <p className="text-gray-700">
            <span className="font-bold">Компания:</span> ИП
            &quot;ПромПоставки&quot;
            <br />
            <span className="font-bold">Адрес:</span>
            {data.data.attributes.legal_address}
            <br />
            <span className="font-bold">БИН (ИИН):</span> 801208301554
            <br />
            <span className="font-bold">Банк:</span> АО &quot;Kaspi Bank&quot;
            <br />
            <span className="font-bold">КБе:</span> 19
            <br />
            <span className="font-bold">БИК:</span> CASPKZKA
            <br />
            <span className="font-bold">Номер счёта:</span> KZ70722S000029004589
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Способы доставки:</h2>
          <p className="text-gray-700">
            Бесплатная доставка{" "}
            <span className="font-bold">в любой город Казахстана</span>,
            транспортными компаниями Jet Logistic, AVIS, CDEK, до терминала в
            вашем городе, либо до офиса/склада, по согласованию сторон. Отгрузка
            производится только после оплаты товара, если не оговорены другие
            условия.
          </p>
        </div>
      </div>
    </div>
  );
}
