export function formatPhoneNumber(phoneNumber: string) {
  // Удаляем все символы, кроме цифр
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  // Проверяем, что получившаяся строка состоит из 11 цифр
  if (digitsOnly.length !== 11) {
    console.error("Неверный формат номера телефона");
    return phoneNumber;
  }

  // Разбиваем номер телефона на части и форматируем
  const formattedNumber = `+${digitsOnly.substring(
    0,
    1
  )} (${digitsOnly.substring(1, 4)}) ${digitsOnly.substring(
    4,
    7
  )} ${digitsOnly.substring(7, 9)} ${digitsOnly.substring(9)}`;

  return formattedNumber;
}
