const axios = require('axios');

const API_URL = "http://localhost:1337"
const ADMIN_API_TOKEN = "2b48f4e1e3445b80e22c2e5ae5023a7a5c3b0cebc5f2a27b4c9181ab0e47732456ac307983948848cf92183fec0829ae332844de9d888f120d6aadd9a1360ba411a6d6bddd71ac4997fa1352d485ee62b402673a4f6ccd95b0a08ec062572ed778704bc9c1d2a671102635929cf830e41bf5aaedf278ff623155ef61a75b0922"

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
    const products = await adminApi.get('products');

    console.log('products.data.data ---> ', products.data.data.length);

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
