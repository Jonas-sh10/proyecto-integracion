import axios from 'axios';

const getAllCharacters = async () => {
  const baseUrl = document.getElementById('input-search').value.trim(); // Asegúrate de obtener y limpiar el valor del input
  if (!baseUrl) {
    console.log('Por favor, ingrese un enlace válido');
    return null;
  }

  try {
    const response = await axios.get(baseUrl);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export { getAllCharacters };
