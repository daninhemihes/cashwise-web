import { mockBalances } from '../mocks/mockData';

const USE_MOCK_DATA = true; 
const API_URL = 'https://sua-api.com/endpoint'; 


export const fetchUserBalances = async () => {
  if (USE_MOCK_DATA) {
    return mockBalances;
  }

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
};

export const login = async ({ username, password }) => {
  const response = await fetch(`http://127.0.0.1:8000/auth/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }
  console.log(response);
  return response.json();
};
