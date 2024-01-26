const axios = require('axios');

const API_URL = "https://prompostavki.kz/cms"
const ADMIN_API_TOKEN = "8834860276e556101dbc2568344c20f15f388fec684fb75a953f80d4380f946fb96bf99efa6f4aebf32115cf27cd2e21210260ea491d309800bb6f5c9925c2c8aafd02d4c9d5faae30ac178e68972cc180de26770f12337b81a9ef17ea1d8a212b8d07442b495e9b3bcd88022a8812204ff718dbdf5b3b9761fd8641a2b63eb4"

const adminApi = axios.create({
    baseURL: `${API_URL}/api/`,
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${ADMIN_API_TOKEN}`,
    },
  });

const removeNbsp = async () => {
  try {
    // Получаем все продукты
    const products = await adminApi.get('products?pagination[pageSize]=100000');

    console.log('Общее количество продуктов = ', products.data.data.length);

    // Обновляем каждый продукт
    for (const product of products.data.data) {
      const updatedDescription = product.attributes.description.replace(/&nbsp;/g, '');
      
      // Обновляем продукт с новым описанием
      await adminApi.put(`products/${product.id}`, {
        data: {
            description: updatedDescription
        },
      });
    }

    console.log('Все продукты обновлены успешно.');
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
};

removeNbsp();
