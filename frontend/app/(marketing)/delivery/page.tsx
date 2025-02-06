import { getContacts } from "@/services/contacts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оплата и доставка",
};


// TODO: сделать через цмс

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
            <span className="font-bold">Компания:</span> ТОО 
            &quot;СпецЭнергоПоставка&quot;
            <br />
            <span className="font-bold">Юридический адрес:</span>
            150000, РК, г. Петропавловск, ул. Батыр Баяна 67 – 89
            <br />
            <span className="font-bold">Почтовый адрес:</span>
            150000, РК, г. Петропавловск, ул. Батыр Баяна 67 – 89
            <br />
            <span className="font-bold">БИН:</span> 250140010952
            <br />
            <span className="font-bold">Банк:</span> АО &quot;Народный Банк Казахстана&quot;
            <br />
            <span className="font-bold">КБе:</span> 17
            <br />
            <span className="font-bold">БИК:</span> HSBKKZKX
            <br />
            <span className="font-bold">Номер счёта (в тенге):</span> KZ28601A251015539651
            <br />
            <span className="font-bold">Номер счёта (в рублях):</span> KZ49601A251015539661
            <br />
            <span className="font-bold">Свидетельство НДС:</span> Серия 48001 №
            1116230 От 14 января 2025
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
