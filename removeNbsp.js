const axios = require('axios');

const API_URL = "https://prompostavki.kz/cms"
const ADMIN_API_TOKEN = "8008fcf50bed1f809af8e98574684d3872e4d8c65edb3f5b878d3a4395d792feb1dc74326f38d35fd6937dfc98a392772c2d594584cb1cc34b7d706a8248d6b984662e74f50b77051d7b160e4d30ac52ddc95e976a2cbdf1be52d9c78eab2039c7379cf622b16baeadbe1741b3be884b8d37bbaa7e4f4fd8e33f56616dc5ae42"

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
